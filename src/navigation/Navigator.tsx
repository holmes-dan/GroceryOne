import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Account from '../screens/Account.tsx';
import Camera from '../screens/Camera.tsx';
import Discover from '../screens/Discover.tsx';
import Home from '../screens/Home.tsx';
import Intro from '../screens/Intro.tsx';
import Settings from '../screens/Settings.tsx';
import Tastes from '../screens/Tastes.tsx';

LogBox.ignoreAllLogs();

const screens = {
  ['Account']: Account,
  ['Camera']: Camera,
  ['Discover']: Discover,
  ['Home']: Home,
  ['Settings']: Settings,
};
const signInScreens = {
  ['Intro']: Intro,
  ['Tastes']: Tastes,
};

const Navigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        gestureEnabled={false}
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        {Object.entries(screens).map(([name, Component]) => (
          <Stack.Screen
            component={Component}
            key={name}
            name={name}
            options={{animation: 'fade', gestureEnabled: false}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const SignIn = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        gestureEnabled={false}
        initialRouteName={'Intro'}
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        {Object.entries(signInScreens).map(([name, Component]) => (
          <Stack.Screen
            component={Component}
            key={name}
            name={name}
            options={{animation: 'fade', gestureEnabled: false}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
