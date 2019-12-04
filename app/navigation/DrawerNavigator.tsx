import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AntDesign } from '@expo/vector-icons';

import RootStack from '../navigation/StackNavigator';
import HomeScreen from '../screens/HomeScreen';
import LicenseScreen from '../screens/LicenseScreen';
import Header from '../components/Header';


const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  License: {
    screen: LicenseScreen,
  },
},
{
  drawerPosition: 'right',
  drawerWidth: 200,
  edgeWidth: 60,
});


export default DrawerNavigator
