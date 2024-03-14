import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import PieChart from 'react-native-pie-chart';

const CategoryTitle = ({color, size, title, percentage}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 10,
      }}>
      <View
        style={{
          backgroundColor: color,
          width: size,
          height: size,
          borderRadius: 50,
          marginRight: 10,
        }}
      />
      <Text
        style={{
          color: 'black',
          fontSize: responsiveFontSize(1.7),
        }}>{`${percentage} % ${title}`}</Text>
    </View>
  );
};

const Graph = ({categoriesCount, categoriesPercentage}) => {
  const widthAndHeight = 160;
  const series = [
    categoriesCount['Food&Groceries'],
    categoriesCount['Travels&Hotels'],
    categoriesCount['Fuel&Gas'],
    categoriesCount['Housing&Bills'],
    categoriesCount['Entertainment'],
    categoriesCount['E-Commerce'],
    categoriesCount['Healthcare'],
    categoriesCount['Unknown'],
  ];
  const sliceColor = [
    '#4F75FE',
    '#FF555D',
    '#FF7801',
    '#13C38B',
    '#FF6581',
    '#9F3CFE',
    '#FBD203',
    '#072246',
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={{width: '50%', height: '100%', justifyContent: 'center'}}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.6}
        />
      </View>
      <View style={{width: '50%', height: '100%', justifyContent: 'center'}}>
        {categoriesPercentage.map((item, index) => (
          <CategoryTitle
            key={Object.keys(item)[0]} // Assuming each item has only one key-value pair
            color={sliceColor[index]}
            size={10}
            percentage={Object.values(item)[0]} // Accessing the percentage value
            title={Object.keys(item)[0]} // Accessing the category name
          />
        ))}

        {/* <CategoryTitle
          color={'#FF555D'}
          size={10}
          percentage={27}
          title={'Travel & Hotels'}
        />
        <CategoryTitle
          color={'#FF7801'}
          size={10}
          percentage={16}
          title={'Fuel and petrol'}
        />
         <CategoryTitle
          color={'#13C38B'}
          size={10}
          percentage={10}
          title={'Housing & Bill'}
        />
        <CategoryTitle
          color={'#FF6581'}
          size={10}
          percentage={7}
          title={'Entertainment'}
        />
        <CategoryTitle
          color={'#9F3CFE'}
          size={10}
          percentage={6}
          title={'E-commerce'}
        />
        <CategoryTitle
          color={'#FBD203'}
          size={10}
          percentage={5}
          title={'Healthcare'}
        />
        <CategoryTitle
          color={'#072246'}
          size={10}
          percentage={4}
          title={'Unknown'}
        /> */}
      </View>
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    width: '95%',
    height: responsiveHeight(30),
    borderRadius: 20,
    elevation: 5, // Add elevation for shadow
    shadowColor: '#000000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 3.84, // Shadow radius
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});
