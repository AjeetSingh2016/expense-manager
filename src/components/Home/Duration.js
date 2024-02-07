import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const Buttons = ({title, pressed}) => (
  <TouchableOpacity style={{paddingRight: 80}}>
      {
      pressed ?
        <Text style={{ color: 'black', fontWeight: 500 }}>{title}</Text> :
        <Text style={{ color: '#A9A9A9', fontWeight: 500 }}>{title}</Text>
    }
   
  </TouchableOpacity>
);

const Duration = () => {
  return (
    <ScrollView
      horizontal={true}
      className="bg-white"
      contentContainerStyle={{
        justifyContent: 'space-between',

        alignItems: 'center',
        paddingHorizontal: 25,
      }}
      style={{height: responsiveHeight(5)}}>
      <Buttons title={'Today'} pressed={true}/>
      <Buttons title={'Tomorrow'} pressed={false}/>
      <Buttons title={'This week'} pressed={false}/>
      <Buttons title={'This month'} pressed={false}/>
      <Buttons title={'This year'} pressed={false}/>
    </ScrollView>
  );
};

export default Duration;

const styles = StyleSheet.create({});
