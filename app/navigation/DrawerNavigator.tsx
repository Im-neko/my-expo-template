import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from '../screens/HomeScreen';


const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  }
},
{
  drawerPosition: 'right',
  drawerType: 'front',
  drawerWidth: 200,
});


export default DrawerNavigator
