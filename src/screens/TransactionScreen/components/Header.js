import { StyleSheet, Text, View } from 'react-native'
import { FocusedStatusBar } from '../../../components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

const Header = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: "center", height: 56}}> 
      <View style={{ justifyContent: 'center', alignItems: 'start' }}> 
        <View
          style={{
            marginLeft: 10,
            borderWidth: 1,
            borderColor: 'lightgray',
            height: 40,  // Fixed height
            alignItems: 'center',
            borderRadius: 20,
            justifyContent: 'space-around',
            flexDirection: 'row',
            paddingHorizontal: 10,
            minWidth: 90
          }}
        >
          <FontAwesomeIcon icon="chevron-down" color={'black'} size={20} />
          <Text style={{ color: 'black', fontSize: responsiveFontSize(2), fontWeight: '400', paddingLeft: 10}}>All</Text>
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
