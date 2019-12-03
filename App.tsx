import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import styled from 'styled-components/native';

import HomeScreen from './app/screens/HomeScreen';


const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const App = () => {
  const Layout = createAppContainer(RootStack);
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

export default App;
