import {View, Text, Button, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import SmsAndroid from 'react-native-get-sms-android';
import {getTransactionInfo} from 'transaction-sms-parser';
import {
  retrieveAndProcessCreditSMS,
  retrieveAndProcessDebitSMS,
} from '../utils/function';
import {
  FocusedStatusBar,
  HeaderBar,
  ExpenseCard,
  TransactionCard,
  Duration,
  ChartHome,
} from '../components';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-vector-icons/icon';
import {StatusBar} from 'react-native';
import MyContext from '../context/MyContext';

const Home = ({navigation}) => {
  
  const {
    name,
    setName,
    totalCreditedAmount,
    setTotalCreditedAmount,
    totalDebitedAmount,
    setTotalDebitedAmount,
    creditedTransaction,
    setCreditedTransaction,
    debitedTransaction,
    setDebitedTransaction,
    allTransactions,
    setAllTransactions,
    categories,
    setCategories
  } = useContext(MyContext);

  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const minDate = firstDayOfMonth.getTime();
  const maxDate = today.getTime();

  useEffect(() => {
    console.log('Hello');
    retrieveAndProcessCreditSMS(minDate, maxDate, 'credit')
      .then(data => {
        setTotalCreditedAmount(data.amount);
        setCreditedTransaction(data.transactionsArray);

        // console.log(data.amount);
      })
      .catch(error => {
        console.error(
          'Error while retrieving and processing credited SMS:',
          error,
        );
      });

    retrieveAndProcessDebitSMS(minDate, maxDate)
      .then(data => {
        setTotalDebitedAmount(data.amount);
        setDebitedTransaction(data.transactionsArray);
        setCategories(data.category);
      })
      .catch(error => {
        console.error(
          'Error while retrieving and processing credited SMS:',
          error,
        );
      });
  }, []);

  useEffect(() => {
    // This useEffect will run every time creditedTransaction or debitedTransaction changes
    if (creditedTransaction.length > 0 && debitedTransaction.length > 0) {
      const mergedTransactions = [
        ...creditedTransaction,
        ...debitedTransaction,
      ];
      const sortedTransactions = mergedTransactions.sort(
        (a, b) => b.date - a.date,
      );
      // console.log(sortedTransactions);
      setAllTransactions(sortedTransactions);
      // console.log(sortedTransactions);
    }
  }, [creditedTransaction, debitedTransaction]);

  useEffect(() => {
    // console.log(allTransactions);
  }, [allTransactions]);

  return (
    <View className="flex flex-1 flex-col ">
      <FocusedStatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor="#072246"
      />
      <View style={{flex: 1.5}}>
        <HeaderBar />
      </View>

      <View style={{flex: 12}}>
        <ScrollView style={{backgroundColor: '#red'}}>
          {/* <Duration /> */}
          <ExpenseCard />
          <ChartHome />
          {allTransactions.length > 0 ? (
            <TransactionCard allTransactions={allTransactions} />
          ) : (
            <Text style={{color: 'black'}}>Loading</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
