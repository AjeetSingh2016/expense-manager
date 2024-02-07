import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Transactions = ({data}) => {
  const [uri, setUri] = useState({
    uri: 'https://img.icons8.com/ios-filled/50/down-left-arrow.png',
    bg: 'lightgreen',
    arrowColor: 'green',
  });

  useEffect(() => {
    if (data.type === 'debit') {
      setUri({
        uri: 'https://img.icons8.com/ios-filled/50/up-left-arrow.png',
        bg: '#FFE3BB',
        arrowColor: '#ED2B2A',
      });
    }
  }, []);

  return (
    <View className="items-center flex-row" style={{width: '90%', height: 70}}>
      <View
        // className="bg-green-200"
        style={{
          height: '75%',
          width: '17%',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: uri.bg,
        }}>
        <Image
          style={{height: 30, aspectRatio: 1, tintColor: uri.arrowColor}}
          source={{
            uri: uri.uri,
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
          {data.title}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(1.5),
            fontWeight: 400,
          }}>
          Oct 16 2022
        </Text>
      </View>

      <View
        style={{
          height: '85%',
          width: '20%',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Text style={{color: uri.arrowColor}}>
          {data.type === 'debit' ? `- $ ${data.amount}` : `+ $ ${data.amount}`}
        </Text>
      </View>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({});
