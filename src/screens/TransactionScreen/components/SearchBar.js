import {StyleSheet, Text, View, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '90%',
          height: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#0d2f5cd8',
          borderRadius: 10,
          paddingHorizontal: 10
        }}>
        <TextInput placeholder="Search your transaction.." onChangeText={text => setSearchQuery(text)} value={searchQuery}/>
        <FontAwesomeIcon icon="chevron-right" color={'#FAB007'} size={20} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
