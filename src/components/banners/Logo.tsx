import React from 'react';
import {StyleSheet, View} from 'react-native';

import Go from '../../assets/icons/logo.svg';
import Text from '../Text.tsx';
import {useTheme} from '../../utils/theme/context.tsx';

const LogoBanner = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.view}>
      <Go fill={colors.logo} height={59} width={90} />
      <Text
        level={5}
        text="GroceryOne"
        style={[styles.text, {color: colors.logo}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 30,
  },
  text: {
    fontFamily: 'Livvic',
    paddingLeft: 2,
    marginTop: -4,
  },
});

export default LogoBanner;
