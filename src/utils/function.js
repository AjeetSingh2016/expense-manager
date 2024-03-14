// smsUtils.js
import {getTransactionInfo} from 'transaction-sms-parser';
import SmsAndroid from 'react-native-get-sms-android';
import {getTransactionDetail} from './TransactionDetail/function';

export function retrieveAndProcessDebitSMS(minDate, maxDate) {
  const filter = {
    box: 'inbox',
    // minDate: minDate,
    // maxDate: maxDate,
    bodyRegex: '(?i).*\\b(?:[aA]\\\\?[\\/\\\\]c).*\\b.*',
    // ... other filters
  };

  return new Promise((resolve, reject) => {
    SmsAndroid.list(
      JSON.stringify(filter),
      fail => {
        console.log('Failed with this error: ' + fail);
        reject(fail);
      },
      (count, smsList) => {
        const arr = JSON.parse(smsList);
        const DebitData = processDebitSMSList(arr);
        resolve(DebitData);
      },
    );
  });
}

export function processDebitSMSList(smsList) {
  let category = {
    "E-Commerce": 0,
    "Entertainment": 0,
    "Food&Groceries": 0,
    "Fuel&Gas": 0,
    "Healthcare": 0,
    "Housing&Bills": 0,
    "Travels&Hotels": 0,
    "Unknown": 0,
  };
  let newTotalDebitedAmount = 0;

  const transactionsArray = [];

  smsList.forEach(smsObject => {
    const smsBody = smsObject.body;

    if (
      smsBody.includes('withdrawn') ||
      (smsBody.includes('We') && smsBody.includes('received'))
    ) {
      const json = getTransactionDetail(smsObject);
      const debitedAmount = parseFloat(json.amount);


      if (json.category == "E-Commerce") {
        category["E-Commerce"]++;
      } else if (json.category == "Entertainment") {
        category["Entertainment"]++;
      } else if (json.category == "Food&Groceries") {
        category["Food&Groceries"]++;
      } else if (json.category == "Fuel&Gas") {
        category["Fuel&Gas"]++;
      } else if (json.category == "Healthcare") {
        category["Healthcare"]++;
      } else if (json.category =="Housing&Bills") {
        category["Housing&Bills"]++;
      } else if (json.category == "Travels&Hotels") {
        category["Travels&Hotels"]++;
      } else {
        category["Unknown"]++;
      }

      if (debitedAmount) {
        transactionsArray.push(json);
      }

      if (!isNaN(debitedAmount)) {
        newTotalDebitedAmount += debitedAmount;
      }
    } else if (
      !smsBody.includes('pay') &&
      !smsBody.includes('will be') &&
      !smsBody.includes('due') &&
      !smsBody.includes('refund')
    ) {
      const json = getTransactionDetail(smsObject);

      if (json && json.type === 'debit') {
        if (json.category == "E-Commerce") {
          category["E-Commerce"]++;
        } else if (json.category == "Entertainment") {
          category["Entertainment"]++;
        } else if (json.category == "Food&Groceries") {
          category["Food&Groceries"]++;
        } else if (json.category == "Fuel&Gas") {
          category["Fuel&Gas"]++;
        } else if (json.category == "Healthcare") {
          category["Healthcare"]++;
        } else if (json.category =="Housing&Bills") {
          category["Housing&Bills"]++;
        } else if (json.category == "Travels&Hotels") {
          category["Travels&Hotels"]++;
        } else {
          category["Unknown"]++;
        }
        const debitedAmount = parseFloat(json.amount);

        if (debitedAmount) {
          transactionsArray.push(json);
        }

        if (!isNaN(debitedAmount)) {
          newTotalDebitedAmount += debitedAmount;
        }
      } else {
      }
    }
  });

  return {
    transactionsArray: transactionsArray,
    amount: newTotalDebitedAmount,
    category: category,
  };
}

// ............................... >

export function retrieveAndProcessCreditSMS(minDate, maxDate, transactionType) {
  const filter = {
    box: 'inbox',
    // minDate: minDate,
    // maxDate: maxDate,
    // bodyRegex: '(?i).*\\b(?:a\\/c|a\\\\c|a\\\\\\/c|a\\\\\\\\c)\\b.*',
    bodyRegex: '(?i).*\\b(?:[aA]\\\\?[\\/\\\\]c).*\\b.*',
    // ... other filters
  };

  return new Promise((resolve, reject) => {
    SmsAndroid.list(
      JSON.stringify(filter),
      fail => {
        console.log('Failed with this error: ' + fail);
        reject(fail);
      },
      (count, smsList) => {
        const arr = JSON.parse(smsList);
        const data = processCreditSMSList(arr, transactionType);
        resolve(data);
      },
    );
  });
}
export function processCreditSMSList(smsList) {
  let newTotalCreditedAmount = 0;

  const transactionsArray = [];

  smsList.forEach(smsObject => {
    const smsBody = smsObject.body;

    if (!smsObject.body.includes('withdrawn')) {
      const json = getTransactionDetail(smsObject);

      if (json && json.type === 'credit') {
        const creditedAmount = parseFloat(json.transactionInfo);

        if (json.amount) {
          transactionsArray.push(json);
        }
        if (!isNaN(creditedAmount)) {
          newTotalCreditedAmount += creditedAmount;
        }
      }
    }
  });
  return {
    transactionsArray: transactionsArray,
    amount: newTotalCreditedAmount,
  };
}

// ............................... >
