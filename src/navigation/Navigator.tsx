import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Account from '../screens/Account.tsx';
import Discover from '../screens/Discover.tsx';
import Home from '../screens/Home.tsx';
import Intro from '../screens/Intro.tsx';
import Settings from '../screens/Settings.tsx';
import Tastes from '../screens/Tastes.tsx';

LogBox.ignoreAllLogs();

const privateScreens = {
  ['Account']: Account,
  ['Discover']: Discover,
  ['Home']: Home,
  ['Intro']: Intro,
  ['Settings']: Settings,
  ['Tastes']: Tastes,
};

const App = () => {
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
        {Object.entries(privateScreens).map(([name, Component]) => (
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

export default App;
