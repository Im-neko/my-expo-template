import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import styled from 'styled-components/native';

import mainStore from './../stores/main'


const HomeScreen = () => {
  if (mainStore.isLoading) {
    HomeScreen.loaded();
    return (
      <CenterView>
        <ColorText color="blue"> now loading... (3sec)</ColorText>
      </CenterView>
    )
  } else {
    return (
      <CenterView>
        <TouchableOpacity onPress={HomeScreen.onPress}>
          <ColorText>Open up app/screens/HomeScreen.tsx to start working on your app!</ColorText>
        </TouchableOpacity>
      </CenterView>
    );
  }
}

HomeScreen.loaded = () => {
  setTimeout(()=>{mainStore.setLoading(false)}, 3000);

}

HomeScreen.onPress = () => {
  mainStore.setLoading(true);
}

const CenterView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const ColorText = styled.Text`
  color: ${props => props.color || "red"};
`;

export default observer(HomeScreen);

