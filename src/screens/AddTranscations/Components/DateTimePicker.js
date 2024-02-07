import {Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import moment from 'moment';

const DateTimePicker = ({date, setDate, open, setOpen}) => {
  useEffect(() => {}, [date, open]);

  return (
    <>
      <TouchableOpacity style={{justifyContent: "center", alignItems: "center"}} onPress={() => setOpen(true)}>
      <Text style={{color: 'orange', textAlign: 'center'}}>
            {moment(date).format('ll')}
          </Text>
      </TouchableOpacity>

      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
export default DateTimePicker;
