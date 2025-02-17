import React from 'react';
import {StyleSheet, View} from 'react-native';

import Liftoff from '../../assets/images/liftoff.svg';
import Text from '../Text.tsx';
import {useTheme} from '../../utils/theme/context.tsx';

const LogoBanner = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.view}>
      <Liftoff fill={colors.logo} height={54} width={60} />
      <Text
        level={5}
        text="Grocery One"
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
    fontFamily: 'Montserrat-Bold',
    paddingLeft: 10,
    marginTop: -4,
  },
});

export default LogoBanner;
