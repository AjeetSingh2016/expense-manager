import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import moment from 'moment';

const MainCard = ({data}) => {
  console.log(data);
  return (
    <View
      style={{
        width: '100%',
        height: responsiveHeight(40),
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#183153',
          width: '90%',
          height: '95%',
          borderRadius: 20,
        }}>
        <View
          style={{
            width: 'auto',
            height: '15%',
            justifyContent: 'center',
            paddingLeft: 20,
          }}>
          <Text style={{color: 'white', fontSize: responsiveFontSize(2.5)}}>
            {data.provider ? data.provider : data.mode}
          </Text>
        </View>

        <View
          style={{
            width: 'auto',
            height: '70%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(3.5),
              color: '#FAB007',
              fontWeight: '500',
              marginBottom: 5
            }}>
            {data.type === 'debit' ? `- ₹${data.amount}` : `+ ₹${data.amount}`}
          </Text>

          <View>
            <Text style={{fontSize: responsiveFontSize(2)}}>
              {' '}
              {data.type === 'debit' ? data.payeeName : data.mode}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: 'auto',
            height: '15%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: responsiveFontSize(1.8)}}>
            {moment(data.date).format('MMMM Do YYYY, h:mm a')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MainCard;

const styles = StyleSheet.create({});
