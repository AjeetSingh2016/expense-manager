// smsUtils.js
import { getTransactionInfo } from 'transaction-sms-parser';
import SmsAndroid from 'react-native-get-sms-android';

export function processSMSList(smsList, transactionType) {
  let newTotalCreditedAmount = 0;

  smsList.forEach(smsObject => {
    const smsBody = smsObject.body;
    // console.log(smsBody);
    if(transactionType==='debit' && !smsBody.includes('will be')){
        const transactionInfo = getTransactionInfo(smsObject.body);
        if (transactionInfo && transactionInfo.transactionType === transactionType ) {
          const creditedAmount = parseFloat(transactionInfo.transactionAmount);
          console.log("SMS body:" + smsBody)
          console.log(transactionInfo)
          console.log(creditedAmount)
          if (!isNaN(creditedAmount)) {
            newTotalCreditedAmount += creditedAmount;
          }
        }
    }else{
        if (!smsObject.body.includes('withdrawn')) {
            const transactionInfo = getTransactionInfo(smsObject.body);
            if (transactionInfo && transactionInfo.transactionType === transactionType) {
              const creditedAmount = parseFloat(transactionInfo.transactionAmount);
              if (!isNaN(creditedAmount)) {
                newTotalCreditedAmount += creditedAmount;
              }
            }
        }
    }
  });

  return newTotalCreditedAmount;
}


export function retrieveAndProcessSMS(minDate, maxDate, transactionType) {
  const filter = {
    box: 'inbox',
    minDate: minDate,
    maxDate: maxDate,
    bodyRegex: '(?i).*(?:credited|received|debited).*',
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
        const newTotalCreditedAmount = processSMSList(arr, transactionType);
        resolve(newTotalCreditedAmount);
      },
    );
  });
}
