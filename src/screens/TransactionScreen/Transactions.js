import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import { FocusedStatusBar } from '../../components'
import SearchBar from './components/SearchBar'
import React from 'react'

const Transactions = () => {
  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
        <FocusedStatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="white"
      />
      <Header />
      <SearchBar />
    </View>
  )
}

export default Transactions

const styles = StyleSheet.create({})