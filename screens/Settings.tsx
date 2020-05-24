import React from 'react';
import { Text } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import styled from '@emotion/native';
import { RootDrawerParamList } from '../App';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface SettingsProps {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Settings'>;
}

const Settings = ({ navigation }: SettingsProps) => {
  return (
    <Container>
      <Text>Settings</Text>
    </Container>
  );
};

export default Settings;
