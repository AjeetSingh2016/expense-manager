import {View, Text, Image} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import React from 'react';



const ExpenseCard = () => {

  return (
    <View
      style={{height: responsiveScreenHeight(14), backgroundColor: "#E4E9EC"}}
      className="justify-center items-center">
      <View
        style={{height: '90%', width: '95%'}}
        className="bg-gray-800 text-white, justify-around items-center flex flex-row rounded-lg">
        <View
          style={{width: '40%'}}
          className="flex flex-row justify-center items-center">
          <Image
            style={{height: 30, aspectRatio: 1, tintColor: 'red'}}
            source={{
              uri: 'https://img.icons8.com/color/96/000000/thick-arrow-pointing-up.png',
            }}
          />
          <View className="ml-2">
            <Text style={{fontSize: responsiveFontSize(1.5)}}>Spending</Text>
            <Text style={{fontSize: responsiveFontSize(2.5)}}>11,930</Text>
          </View>
        </View>

        <View
          style={{height: '40%', width: 1, backgroundColor: 'white'}}></View>

        <View
          style={{width: '40%'}}
          className="flex flex-row justify-center items-center">
          <Image
            style={{height: 30, aspectRatio: 1, tintColor: 'green'}}
            source={{
              uri: 'https://img.icons8.com/color/96/000000/thick-arrow-pointing-down.png',
            }}
          />
          <View className="ml-2">
            <Text style={{fontSize: responsiveFontSize(1.5)}}>Income</Text>
            <Text style={{fontSize: responsiveFontSize(2.5)}}>24,654</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExpenseCard;
