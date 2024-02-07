import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import moment from 'moment';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useEffect} from 'react';
import DateTimePicker from './DateTimePicker';

const Amount = ({date, setDate, open, setOpen}) => {
  useEffect(() => {}, [date]);

  return (
    <View
      style={{
        backgroundColor: '#072246',
        height: '25%',
        justifyContent: 'flex-end',
      }}>
      <View
        style={{
          height: '45%',
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: '#ffffffbb',
              fontWeight: '500',
              fontSize: responsiveFontSize(2.6),
            }}>
            How Much?
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesomeIcon
              icon="inr"
              color={'orange'}
              size={responsiveFontSize(3.5)}
            />
            <TextInput
              autoFocus={true}
              style={{fontSize: responsiveFontSize(3.5), color: 'white'}}
              placeholder="0"
              placeholderTextColor={'orange'}
            />
          </View>
        </View>
        <View style={{justifyContent: 'space-around'}}>
        <Text style={{color: 'white', textAlign: 'left'}}>Date</Text>
          <DateTimePicker
              date={date}
              setDate={setDate}
              open={open}
              setOpen={setOpen}
            />
        </View>
      </View>
    </View>
  );
};

export default Amount;

const styles = StyleSheet.create({});
