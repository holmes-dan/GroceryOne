import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import Text from '../Text.tsx';
import {useTheme} from '../../utils/theme/context.tsx';

const AccountBanner = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.aLayer}>
      <View style={styles.row}>
        <Image
          source={require('../../assets/images/profile-picture.jpg')}
          style={styles.image}
        />
        <View style={styles.textView}>
          <Text level={3} style={{color: colors.primary}} text="Jess Jones" />
          <View style={styles.row}>
            <Text
              style={[styles.text, {color: colors.outline}]}
              text="10 followers"
            />
            <View style={styles.buffer} />
            <Text
              style={[styles.text, {color: colors.outline}]}
              text="10 following"
            />
          </View>
        </View>
      </View>
      <FontAwesome6
        name="gear"
        onPress={() => navigation.navigate('Settings')}
        style={[styles.icon, {color: colors.primary}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aLayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
  buffer: {width: 15},
  icon: {fontSize: 25},
  image: {
    justifyContent: 'flex-end',
    borderRadius: 50,
    height: 60,
    marginRight: 10,
    width: 60,
  },
  row: {flexDirection: 'row', justifyContent: 'space-around'},
  text: {fontSize: 13, marginTop: -15},
  textView: {flexDirection: 'column'},
});

export default AccountBanner;
