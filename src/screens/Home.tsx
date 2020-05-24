import React, { useLayoutEffect } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import styled from '@emotion/native';
import { Ionicons } from '@expo/vector-icons';

import { RootDrawerParamList, RootStackParamList } from '../../App';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface HomeProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<RootStackParamList, 'Home'>,
    DrawerNavigationProp<RootDrawerParamList, 'Root'>
  >;
  // DrawerNavigationProp isn't supposed to have a string apparently?
  // Keeping it gets rid of typing warnings though
}

const Home = ({ navigation }: HomeProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableWithoutFeedback
          hitSlop={{ left: 20, right: 30 }}
          onPress={() => navigation.openDrawer()}
        >
          <View>
            <Ionicons name="md-menu" size={24} />
          </View>
        </TouchableWithoutFeedback>
      ),
      headerRight: () => <Ionicons name="ios-options" size={24} />,
    });
  });

  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
};

export default Home;
