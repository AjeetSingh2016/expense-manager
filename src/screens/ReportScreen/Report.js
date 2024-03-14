import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {FocusedStatusBar} from '../../components';
import Header from './components/Header';
import Graph from './components/Graph';
import MyContext from '../../context/MyContext';
import {calculatePercentage} from '../../utils/PercentageCalc';

const Report = () => {
  const {categories} = useContext(MyContext);
  const [categoriesPercentage, setcategoriesPercentage] = useState([]);

  useEffect(() => {
    const percentages = calculatePercentage(
      categories['E-Commerce'],
      categories['Entertainment'],
      categories['Food&Groceries'],
      categories['Fuel&Gas'],
      categories['Healthcare'],
      categories['Housing&Bills'],
      categories['Travels&Hotels'],
      categories['Unknown'],
    );
    setcategoriesPercentage(percentages);
    console.log(percentages);
  }, [categories]);

  return (
    <View>
      <FocusedStatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor="#072246"
      />
      <Header />
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <Graph
          categoriesCount={categories}
          categoriesPercentage={categoriesPercentage}
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 20,
          alignItems: 'center',
        }}>
        <Text style={{color: 'black'}}>Hello</Text>
      </ScrollView>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({});
