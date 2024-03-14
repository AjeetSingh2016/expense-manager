import {getTransactionInfo} from 'transaction-sms-parser';
import SmsAndroid from 'react-native-get-sms-android';
import { dictionaries } from '../DataSet/Category';
import { getCategory } from './CetegorySorting';



const bankList = [
    'State Bank of India (SBI)',
    'Punjab National Bank (PNB)',
    'Bank of Baroda (BOB)',
    'Canara Bank',
    'Union Bank of India',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'IDBI Bank',
    'Bank of India (BOI)',
    'Indian Bank',
    'Central Bank of India',
    'Kotak Mahindra Bank',
    'Yes Bank',
    'IndusInd Bank',
    'Federal Bank',
    'Punjab & Sind Bank',
    'Bank of Maharashtra',
    'Karnataka Bank',
    'Karur Vysya Bank',
    'Paytm',
  ];


  function extractRefNoFromSMS(sms) {
    const refNoPattern = /(?:ref(?:erence)?\s*(?:no(?:\.|umber)?)?\s*(?:is)?\s*:?|#)\s*(\d+)/i;
    const match = sms.match(refNoPattern);
    return match && match.length > 1 ? match[1] : null;
}

function findMatch(input) {
    if (input) {
        const exactMatch = bankList.find(word => word.toLowerCase() === input.toLowerCase());
        if (exactMatch) {
            return exactMatch;
        }
        const partialMatches = bankList.filter(word => word.toLowerCase().includes(input.toLowerCase()));
        return partialMatches.length > 0 ? partialMatches[0] : input;
    } else {
        return null;
    }
}

function extractTransactionInfo(message) {
  // Regular expressions for extracting amount, merchant name, and card name
  const amountRegex =
    /(?:(?:RS|INR|MRP)\.?\s?)(\d+(?:,\d+)?(?:,\d+)?(?:\.\d{1,2})?)/i;
  const merchantRegex =
    /(?:\sat\s|in\*)([A-Za-z0-9]*\s?-?\s?[A-Za-z0-9]*\s?-?\.?)/i;
  const cardRegex =
    /(?:\smade on|ur|made a\s|in\*)([A-Za-z]*\s?-?\s[A-Za-z]*\s?-?\s[A-Za-z]*\s?-?)/i;

  // Extracting amount
  const amountMatch = message.match(amountRegex);
  const amount = amountMatch ? amountMatch[1] : null;

  // Extracting merchant name
  const merchantMatch = message.match(merchantRegex);
  const merchant = merchantMatch ? merchantMatch[1] : null;

  // Extracting card name
  const cardMatch = message.match(cardRegex);
  const card = cardMatch ? cardMatch[1] : null;

  // Constructing JSON object
  const transactionInfo = {
    amount: amount,
    merchant: merchant,
    card: card,
  };

  return transactionInfo;
}

function findPayeeName(transactionSMS) {
  if (transactionSMS.includes('withdrawn')) {
    return 'Cash withdrawn';
  }

  // Regular expression patterns to find payee names
  const patterns = [
    /to\s([A-Za-z\s&]+)/, // Original pattern for messages like "to [Merchant]"
    /payee\s*=\s*([A-Za-z\s&]+)/, // For messages like "payee = NACH"
    /charged\s*via\s*([A-Za-z\s&]+)/, // For messages like "charged via Simpl"
    /towards\s*your\s*loan\s*a\/c\s*([A-Za-z0-9]+)/, // For messages like "towards your loan a/c BAN22E003425810"
    /has\s*a\s*debit\s*by\s*([A-Za-z\s&]+)/, // For messages like "has a debit by NACH"
    /Deposit\s*by\s*transfer\s*from\s*([\w\s.]+)/ // For messages like "Deposit by transfer from Mr. MANOJ KUMAR CHAU"
  ];

  // Iterate through patterns to find a match
  for (const pattern of patterns) {
    const match = transactionSMS.match(pattern);
    if (match !== null && match.length > 1) {
      return match[1].trim();
    }
  }

  // If no match is found, return null
  return null;
}

function findPayerName(message) {
  // / // Regular expression to find the merchant name
  const payerNameRegex1 = /from\s(.+?)(?=\s\w+\sINR|\sin\s)/; // For the first type of message
  const payerNameRegex2 = /by\s(.+?)(?=\sINFO:\/ATTN|-SBI)/; // For the second type of message

  // Executing the regex pattern on the message
  let match = message.match(payerNameRegex1);

  // If the first regex pattern doesn't match, try the second one
  if (!match) {
      match = message.match(payerNameRegex2);
  }

  // If a match is found, return the payer name
  if (match && match.length > 1) {
      return match[1].trim();
  } else {
      return null;
  }
}

function cleanMerchantName(merchantName) {
  // Remove "on" if it exists in the name
  if (merchantName) {
    merchantName = merchantName.replace(/\bon\b/i, '');
    // Remove "Ref No" if it exists in the name with or without space
    merchantName = merchantName.replace(/\bRef\s*No\b|\bRefNo\b/i, '');

    merchantName = merchantName.replace(/\bRs\b|\bof\s*Rs\b/g, '');
    // Trim any extra spaces
    return merchantName.trim();
  }
  return null;
}

function findTransactionAmount(transactionSMS) {

    const transactionInfo = getTransactionInfo(transactionSMS);
    const creditedAmount = parseFloat(transactionInfo.transactionAmount);


    if(!creditedAmount){
        const regex = /debited\s+by\s+(\d+(\.\d{1,2})?)/;

        const match = transactionSMS.match(regex);
        if (match && match[1]) {
          return parseFloat(match[1]);
        }
        else{
            return null;
        }
    }

    return creditedAmount;
}


function findKeyword(message) {
    // Convert message to lowercase for case insensitivity
    const lowercaseMessage = message.toLowerCase();
  
    // Keywords to search for
    const keywords = ['imps', 'neft', 'upi', 'cash', 'atm', 'cheque', 'axio'];
  
    // Loop through each keyword
    for (let keyword of keywords) {
      // Check if the lowercase message contains the lowercase keyword
      if (lowercaseMessage.includes(keyword.toLowerCase())) {
        // If keyword is "deposit of cash", return "cash" instead
        if (keyword.toLowerCase() === 'deposit of cash') {
          return 'cash';
        }
        // Otherwise, return the keyword found
        return keyword.toUpperCase();
      }
    }
  
    // If no keyword found, return null
    return null;
  }

function findProvider(message) {
    // Convert message to lowercase for case insensitivity
    const lowercaseMessage = message.toLowerCase();
  
    // Keywords to search for
    const keywords = ['imps', 'neft', 'upi', 'cash', 'atm', 'cheque'];
    // Loop through each keyword
    for (let keyword of keywords) {
      // Check if the lowercase message contains the lowercase keyword as a substring
      if (lowercaseMessage.includes(keyword.toLowerCase())) {
        // If the keyword is an acronym, return the corresponding full name
        for (let fullKeyword of keywords) {
          if (keyword === fullKeyword.toLowerCase() && keyword !== fullKeyword) {
            return fullKeyword.toUpperCase();
          }
        }
        return keyword.toUpperCase();
      }
    }
  
    // If no keyword found, return null
    return message;
  }


  export function getTransactionDetail(smsObject) {
  
    const transactionInfo = getTransactionInfo(smsObject.body);
    
    if (!transactionInfo) {
        // Handle case where transactionInfo is null or undefined
        return null;
    }

    let transactionType = "";

    if (smsObject.body.includes('withdrawn')) {
      transactionType = "debit"
    }else{
      transactionType = transactionInfo.transactionType;
    }
     
    const amount = findTransactionAmount(smsObject.body);
    const mode = findKeyword(smsObject.body);
    const provider = findProvider(smsObject.address);
    const refNo = extractRefNoFromSMS(smsObject.body);
    let payer = findMatch(cleanMerchantName(findPayerName(smsObject.body)));
    const payee = findMatch(cleanMerchantName(findPayeeName(smsObject.body)));

    if(payer){
      payer = payer.split(" ").slice(0, 2).join(" ");
    }
    
    let category = getCategory(payee);
    
    // if(category){
    //   console.log(category);
    // }

    if (transactionType === 'debit') {
        return {
            amount: amount,
            provider: provider,
            date: smsObject.date,
            type: 'debit',
            mode: mode,
            payeeName: payee,
            smsBody: smsObject.body,
            refNo: refNo,
            category: category
        };
    } else if (transactionType === 'credit') {
        return {
            amount: amount,
            provider: provider,
            date: smsObject.date,
            type: 'credit',
            mode: mode,
            payerName: payer,
            smsBody: smsObject.body,
            refNo: refNo,
            category: null,
        };
    } else {
        return null;
    }
}


