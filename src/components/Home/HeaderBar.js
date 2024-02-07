import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react'

const HeaderBar = () => {
  return (
    <View style={{backgroundColor: "#183153", height: "100%", flexDirection: 'row', display: "flex", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20}}>

      <View style={{paddingLeft: 10}}>
        <Text style={{color: "#FFD43B", fontSize: 12}}> Good Morning! 👋</Text>
        <Text style={{color: "white", fontSize: 24, fontWeight: "500"}}>Ajeet Singh</Text>
      </View>

      <View>
        <TouchableOpacity>
          <FontAwesomeIcon icon="refresh" color={"orange"} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  logo: {
    width: 66,
    height: 58,
  },
});