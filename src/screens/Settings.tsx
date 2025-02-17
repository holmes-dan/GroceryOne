import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useTheme} from '../utils/theme/context';

import BottomButtons from '../components/buttons/Bottom.tsx';
import Text from '../components/Text.tsx';
import SettingsRow from '../components/SettingsRow';

const SettingsScreen = ({navigation}) => {
  const {theme, setTheme, colors} = useTheme();
  const {signOut} = useAuthenticator();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <View style={[styles.view, {backgroundColor: colors.background}]}>
      <Text
        level={4}
        style={[styles.settingsTitle, {color: colors.primary}]}
        title="Settings"
      />
      <SettingsRow
        title="Dark Mode"
        value={theme === 'dark'}
        onValueChange={toggleTheme}
      />
      <Button
        color={colors.error}
        style={styles.signOut}
        title="Sign Out"
        onPress={signOut}
      />
      <BottomButtons
        leftIcon="house"
        leftOnPress={() => navigation.navigate('Home')}
        rightIcon="compass"
        rightOnPress={() => navigation.navigate('Discover')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  rowContainer: {
    paddingTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settingsTitle: {
    paddingTop: '20%',
  },
  signOut: {alignSelf: 'flex-start'},
  switch: {},
});

export default SettingsScreen;
