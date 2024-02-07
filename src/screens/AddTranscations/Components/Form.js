import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import React from 'react';
import DropDown from './DropDown';
import DateTimePicker from './DateTimePicker';
import {Button} from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const TypeData = [
  {label: 'Credit', value: 'Credit'},
  {label: 'Debit', value: 'Debited'},
];

const CategoryData = [
  {label: 'Food or Grocery', value: 'Food'},
  {label: 'Entertainment', value: 'Entertainment'},
  {label: 'Petrol', value: 'Petrol'},
  {label: 'Shoping', value: 'Shoping'},
];

const Form = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingVertical: 25,
      }}>
      <View style={{height: "80%"}}>
      <DropDown data={TypeData} title={'Type'} />
      <DropDown data={CategoryData} title={'Category'} />
      <View style={{padding: 16}}>
        <TextInput style={styles.textInput} 
        placeholderTextColor={"black"}
        placeholder="Description" />
      </View>
      </View>

      <View style={{padding: 16, height: "20%", justifyContent: "center", alignItems: "center"}}>
        <TouchableOpacity style={{backgroundColor: "#183153", height: 45, justifyContent: 'center', width: "70%", borderRadius: 10}}>
          <Text style={{color: "white", textAlign: "center", fontSize: responsiveFontSize(2.2)}}>Continue</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  textInput: {
    height: 55,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: 'black',
    fontWeight: "400"
  },
});
