import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import DrawerTrigger from './DrawerTrigger';


const Header = (props) => {
  console.log(props);
  return (
    <StyledView>
      <DrawerTrigger />
    </StyledView>
  );
}


const StyledView = styled.View`
  background-color: whitesmoke;
`;

export default Header;

