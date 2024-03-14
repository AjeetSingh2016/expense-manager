import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const AddNoteCard = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '15%',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '90%',
          height: '80%',
          backgroundColor: '#183153',
          borderRadius: 10,
        }}>
        <View
          style={{
            width: '100%',
            height: '40%',
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            alignItems: "center",
            flexDirection: "row"
          }}>
          <View style={{flexDirection: "row", width: "20%", justifyContent: "space-between", alignItems: "center"}}>
            <FontAwesomeIcon icon="sticky-note" color={'white'} size={15} />
            <Text style={{color: "white"}}>Notes</Text>
          </View>

          <FontAwesomeIcon icon="pencil" color={'#FAB007'} size={15} />
        </View>

        <View style={{width: "100", height: "60%", justifyContent: "flex-start", alignItems: "flex-start",paddingHorizontal: 20}}>
          <TextInput placeholder='Add Note'/>
        </View>

      </View>

      
    </View>
  );
};

export default AddNoteCard;

const styles = StyleSheet.create({});
