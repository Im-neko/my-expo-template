import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import styled from 'styled-components/native';

const DrawerTrigger = (props) => {
  return (
    <StyledTouchOpacity
      onPress={() => {
        props.navigation.dispatch(DrawerActions.openDrawer())
      }}
    >
      <Icon>
        <AntDesign
          name={'bars'}
          size={48}
          color={'grey'}
        />
      </Icon>
    </StyledTouchOpacity>
  )
}

const Icon = styled.View`
  position: absolute;
  right: 12px;
  top: 8px;
`;

const StyledTouchOpacity = styled.TouchableOpacity`
  height: 60;
`;


export default withNavigation(DrawerTrigger);
