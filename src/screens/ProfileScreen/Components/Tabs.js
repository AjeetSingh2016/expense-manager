import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import auth from '@react-native-firebase/auth';

const logOut = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

const warning = () =>
  Alert.alert('Warning', 'Are you sure you want to leave?', [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {text: 'Yes', onPress: () => logOut()},
  ]);

const Tabs = ({end, idx, data}) => {
  return (
    <View
      style={[
        {
          backgroundColor: '#072246',
          width: '100%',
          height: '20%',
          borderBottomWidth: 0.5,
          borderColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        },
        idx === 0 && styles.topTab,
        idx === 3 && styles.bottomTab,
      ]}>
      <View
        style={{
          width: '20%',
          alignItems: 'center',
          height: '100%',
          justifyContent: 'center',
        }}>
        <View
          style={[
            {
              width: '70%',
              height: '50%',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            },
            {
              backgroundColor:
                data.title === 'Logout'
                  ? 'rgba(255, 0, 0, 0.418)'
                  : 'rgba(255, 166, 0, 0.466)',
            },
          ]}>
          <FontAwesomeIcon
            icon={data.icon}
            color={data.title === 'Logout' ? 'red' : '#FAB007'}
            size={25}
          />
        </View>
      </View>

      <View style={{width: '60%'}}>
        <Text style={{fontSize: responsiveFontSize(2)}}>{data.title}</Text>
      </View>

      <TouchableOpacity
        onPress={warning}
        style={{width: '20%', justifyContent: 'center'}}>
        <FontAwesomeIcon icon="chevron-right" color={'#FAB007'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  topTab: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomTab: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderBottomWidth: 0,
  },
});
