import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import BottomButtons from '../components/buttons/Bottom.tsx';
import {forYouLists} from '../assets/lists/Shopping.ts';
import ForYou from '../components/tabs/ForYou.tsx';
import Popular from '../components/tabs/Popular.tsx';
import Search from '../components/tabs/Search.tsx';
import {useTheme} from '../utils/theme/context.tsx';

const Tab = createMaterialTopTabNavigator();

interface SuggestedListProps {
  navigation: NavigationProp<ParamListBase>;
}

const SuggestedListsScreen: React.FC<SuggestedListProps> = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView style={[styles.aLayer, {backgroundColor: colors.background}]}>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.outline,
          tabBarIndicatorStyle: {display: 'none'},
          tabBarStyle: {backgroundColor: colors.inverseOnSurface},
        })}>
        <Tab.Screen name="For You">
          {props => <ForYou {...props} sugLists={forYouLists} />}
        </Tab.Screen>
        <Tab.Screen name="Search">
          {props => <Search {...props} sugLists={forYouLists} />}
        </Tab.Screen>
        <Tab.Screen name="Popular">
          {props => <Popular {...props} sugLists={forYouLists} />}
        </Tab.Screen>
      </Tab.Navigator>
      <BottomButtons
        leftIcon="house"
        rightIcon="person"
        leftOnPress={() => navigation.navigate('Home')}
        rightOnPress={() => navigation.navigate('Account')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  aLayer: {
    flex: 1,
  },
  loginIcons: {
    marginEnd: 5,
    marginTop: 3,
    marginBottom: 3,
    fontSize: 20,
  },
  searchButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 63,
    width: 40,
    height: 40,
    borderRadius: 30,
    borderWidth: 2,
    zIndex: 1,
  },
  tastesInput: {
    marginTop: 3,
    marginEnd: 5,
    fontSize: 15,
    width: '32%',
  },
});

export default SuggestedListsScreen;
