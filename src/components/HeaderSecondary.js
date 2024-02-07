import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const HeaderSecondary = () => {
  return (
    <View
      style={{
        height: 56,
        backgroundColor: '#072246',
        justifyContent: 'space-center',
        flexDirection: 'row',
        textAlign: 'center',
      }}>
      <TouchableOpacity
        style={{
          width: '40%',
          height: '100%',
          justifyContent: 'center',
          paddingLeft: 10,
        }}>
        <FontAwesomeIcon icon="arrow-left" color={'orange'} size={25} />
      </TouchableOpacity>

      <View style={{width: '60%', height: '100%', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: responsiveFontSize(2.5)}}>
          Expense
        </Text>
      </View>

      <View>
        <Text>H</Text>
      </View>
    </View>
  );
};

export default HeaderSecondary;

const styles = StyleSheet.create({});
