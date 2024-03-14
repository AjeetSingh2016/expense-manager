import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import { FocusedStatusBar } from '../../components';
import SearchBar from './components/SearchBar';
import MyContext from '../../context/MyContext';
import TransactionTape from '../../components/Home/TransactionTape';

const Transactions = () => {
  const { allTransactions } = useContext(MyContext);


  useEffect(() => {
    setData(allTransactions);
  }, [])
  
  const [data, setData] = useState(allTransactions);

  const [searchQuery, setSearchQuery] = useState('');

  const filterData = () => {
    if (searchQuery === '') {
      return allTransactions;
    } else {
      return data.filter(item =>
        Object.values(item).some(
          value =>
            typeof value === 'string' &&
            value.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  };

  // Define a function to render each transaction item
  const renderTransactionItem = ({ item }) => (
    <TransactionTape data={item} />
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingBottom: 120,}}>
      <FocusedStatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor="#072246"
      />
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      <View style={{width: "100%", alignItems: "center", paddingHorizontal: 10}}>
        <FlatList
          data={filterData()}
          renderItem={renderTransactionItem}
          keyExtractor={(item, index) => index.toString()}
        />

      </View>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({});
