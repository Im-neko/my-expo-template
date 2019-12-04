import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import LicenseScreen from '../screens/LicenseScreen';
import Header from '../components/Header';
import DrawerNavigator from './DrawerNavigator';

const RootStack = createStackNavigator(
  {
    Drawer: { 
      screen: DrawerNavigator,
      navigationOptions: {
        header: Header
      }
    },
  },
  { }
)


export default createAppContainer(RootStack);
