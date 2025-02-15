import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import AccountBanner from '../components/banners/Account.tsx';
import BottomButtons from '../components/buttons/Bottom.tsx';
import RecipesTab from '../components/tabs/Recipes.tsx';
import Friends from '../components/tabs/Friends.tsx';
import Tastes from './Tastes.tsx';
import {useTheme} from '../utils/theme/context.tsx';

const Tab = createMaterialTopTabNavigator();

interface AccountProps {
  navigation: NavigationProp<ParamListBase>;
}

const Account: React.FC<AccountProps> = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={[styles.introContainer, {backgroundColor: colors.background}]}>
      <AccountBanner navigation={navigation} />
      <GestureHandlerRootView>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.outline,
            tabBarIndicatorStyle: {display: 'none'},
            tabBarStyle: {backgroundColor: colors.background},
          })}>
          <Tab.Screen name="Recipes">
            {props => <RecipesTab {...props} />}
          </Tab.Screen>
          <Tab.Screen name="Lists">
            {props => <RecipesTab {...props} />}
          </Tab.Screen>
          <Tab.Screen name="Friends">
            {props => <Friends {...props} />}
          </Tab.Screen>
          <Tab.Screen name="Tastes">
            {props => <Tastes {...props} />}
          </Tab.Screen>
        </Tab.Navigator>
        <BottomButtons
          navigation={navigation}
          leftIcon="house"
          rightIcon="compass"
          leftOnPress={() => navigation.navigate('Home')}
          rightOnPress={() => navigation.navigate('Discover')}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  introContainer: {
    flex: 1,
  },
});

export default Account;
