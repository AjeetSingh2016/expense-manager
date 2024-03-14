import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const MessageCard = ({data}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          minHeight: '30%',
          backgroundColor: '#183153',
          width: '90%',
          borderRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: '20%',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              width: '35%',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon icon="info-circle" color={'#FAB007'} size={15} />

            <Text style={{color: 'white', fontSize: responsiveFontSize(2)}}>
              Information
            </Text>
          </View>
        </View>

        <View style={{height: '20%', paddingHorizontal: 10}}>
          <Text>Ref No</Text>
          <Text style={{color: 'white', marginTop: 5}}>{data.refNo ? data.refNo : 'Not Available' }</Text>
        </View>

        <View
          style={{
            backgroundColor: 'gray',
            width: '80%',
            height: '0.4%',
            marginHorizontal: 10,
          }}
        />

        <ScrollView
          contentContainerStyle={{flexGrow: 1, paddingHorizontal: 10, marginTop: 10}}>
          <Text >SMS</Text>
          <Text style={{marginTop: 10, color: "white"}}>
            {data.smsBody}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default MessageCard;

const styles = StyleSheet.create({});
