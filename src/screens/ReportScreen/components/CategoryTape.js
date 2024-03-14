import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

const CategoryTape = ({data}) => {
  const navigation = useNavigation();

  const handleGoToTransactionInfo = () => {
    navigation.navigate('TransactionInfo', {data: data});
  };

    return (
      <TouchableOpacity
        onPress={handleGoToTransactionInfo}
        className="items-center flex-row"
        style={{width: '100%', height: 70}}>
        <View
          // className="bg-green-200"
          style={{
            height: '75%',
            width: '15%',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightgreen',
          }}>
          <Image
            style={{height: 20, aspectRatio: 1, tintColor: 'green'}}
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/down-left-arrow.png',
            }}
          />
        </View>

        <View
          style={{
            height: '85%',
            width: '60%',
            paddingLeft: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveFontSize(2),
              fontWeight: 500,
            }}>
            {data.mode ? data.mode : data.provider}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveFontSize(1.5),
              fontWeight: 400,
            }}>
            {moment(data.date).format('MMM Do YY')}
          </Text>
        </View>

        <View
          style={{
            height: '85%',
            width: '20%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Text style={{color: 'green'}}>{`+ ₹ ${data.amount}`}</Text>
        </View>
      </TouchableOpacity>
    );
  
};


export default CategoryTape

const styles = StyleSheet.create({})