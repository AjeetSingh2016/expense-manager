import {View, Text, Button, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import SmsAndroid from 'react-native-get-sms-android';
import {getTransactionInfo} from 'transaction-sms-parser';
import {retrieveAndProcessSMS} from '../utils/function';
import { FocusedStatusBar, HeaderBar, ExpenseCard, TransactionCard, Duration, ChartHome} from '../components';
import { responsiveScreenHeight, responsiveScreenWidth} from 'react-native-responsive-dimensions';
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-vector-icons/icon';
import { StatusBar } from 'react-native'



const Home = ({ navigation }) => {

  // const [totalCreditedAmount, setTotalCreditedAmount] = useState(0);
  // const [totalDebitedAmount, setTotalDebitedAmount] = useState(0);

  // const today = new Date();
  // const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  // const minDate = firstDayOfMonth.getTime();
  // const maxDate = today.getTime();

  // useEffect(() => {
  //   retrieveAndProcessSMS(minDate, maxDate, 'credit')
  //     .then(newTotalCreditedAmount => {
  //       setTotalCreditedAmount(newTotalCreditedAmount);
  //     })
  //     .catch(error => {
  //       console.error(
  //         'Error while retrieving and processing credited SMS:',
  //         error,
  //       );
  //     });

  //   retrieveAndProcessSMS(minDate, maxDate, 'debit')
  //     .then(newTotalDebitedAmount => {
  //       setTotalDebitedAmount(newTotalDebitedAmount);
  //     })
  //     .catch(error => {
  //       console.error(
  //         'Error while retrieving and processing debited SMS:',
  //         error,
  //       );
  //     });
  // }, []);

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

        <ScrollView style={{ backgroundColor: '#red' }}>
          {/* <Duration /> */}
          <ExpenseCard />
          <ChartHome />
          <TransactionCard />
        </ScrollView>

      </View>
   </View>
  );
};

export default Home;

