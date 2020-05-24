import React from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ThemeProvider } from '@emotion/react';

import theme from './src/theme';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';

export type RootStackParamList = {
  Home: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

export type RootDrawerParamList = {
  Root: undefined;
  Settings: undefined;
};
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const HomeRoot = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerLeftContainerStyle: { paddingLeft: 16 },
      headerRightContainerStyle: { paddingRight: 16 },
    }}
  >
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Drawer.Navigator
        edgeWidth={Dimensions.get('window').width}
        screenOptions={{ swipeEnabled: true, gestureEnabled: true }}
      >
        <Drawer.Screen
          name="Root"
          component={HomeRoot}
          options={{ title: 'Home' }}
        />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
