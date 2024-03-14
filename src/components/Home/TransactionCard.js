import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import TransactionTape from './TransactionTape';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

const data = [
  {
    type: 'credit',
    title: 'Salary',
    data: 'Oct 16 2022',
    amount: '2400',
  },
  {
    type: 'debit',
    title: 'UPI',
    data: 'Dec 26 2022',
    amount: '400',
  },
  {
    type: 'debit',
    title: 'Recharge',
    data: 'Dec 31 2022',
    amount: '155',
  },
];

const TransactionCard = ({allTransactions}) => {
  // useEffect(() => {
  // }, [allTransactions]);

  return (
    <View
      style={{backgroundColor: '#E4E9EC', paddingHorizontal: 10}}
      className="items-center">
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          padding: 15,
          flexDirection: 'row',
        }}>
        <Text style={{color: '#072246', fontWeight: '500'}}>
          RECENT TRANSACTIONS
        </Text>

        <TouchableOpacity>
          <Text style={{color: '#072246'}}>View All</Text>
        </TouchableOpacity>
      </View>

      {allTransactions.slice(0, 10).map((transaction, index) => (
        <TransactionTape key={index} data={transaction} />
      ))}

    </View>
  );
};

export default TransactionCard;
