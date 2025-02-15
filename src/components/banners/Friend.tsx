import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Text from '../Text.tsx';
import {useTheme} from '../../utils/theme/context.tsx';

const Friends = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.aLayer}>
      <View style={styles.row}>
        <Image
          source={require('../../assets/images/profile-picture.jpg')}
          style={styles.image}
        />
        <Text level={2} style={{color: colors.primary}} text="Jess Jones" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aLayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
  },
  buffer: {width: 15},
  icon: {fontSize: 25},
  image: {
    justifyContent: 'flex-end',
    borderRadius: 50,
    height: 40,
    marginRight: 10,
    width: 40,
  },
  row: {flexDirection: 'row', justifyContent: 'space-around'},
  text: {fontSize: 13, marginTop: -15},
  textView: {flexDirection: 'column'},
});

export default Friends;
