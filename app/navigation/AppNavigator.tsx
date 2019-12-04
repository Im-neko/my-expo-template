import React from 'react';
import { SafeAreaView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import styled from 'styled-components/native';

import DrawerNavigator from './DrawerNavigator';
import StackNavigator from './StackNavigator';


const RootSwitch = createSwitchNavigator(
  {
    Home: StackNavigator
  },
  {
    initialRouteName: 'Home'
  }
);

const AppNavigator = () => {
  const Layout = createAppContainer(RootSwitch);
  return (
    <StyledSafeAreaView>
      <Layout />
    </StyledSafeAreaView>
  )
}

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export default AppNavigator;
