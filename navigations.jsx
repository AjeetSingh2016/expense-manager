import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {Report, Transactions, Profile, Home, Add} from './src/screens';

const Tab = createBottomTabNavigator();

const homeName = 'Home';
const detailsName = 'Details';
const settingsName = 'Settings';

export const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          tabBarStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 60, // Adjust height to accommodate the icons
            backgroundColor: "#183153"
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "null",
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Transactions"
          component={Transactions}
          options={{
            tabBarLabel: 'Transactions',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon="inr" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={Add}
          options={{
            tabBarLabel: 'Add',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon="plus-circle" color={"orange"} size={size + 15} />
            ),
          }}
        />
        <Tab.Screen
          name="Report"
          component={Report}
          options={{
            tabBarLabel: 'Report',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon="bar-chart" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Report',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon="user-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
