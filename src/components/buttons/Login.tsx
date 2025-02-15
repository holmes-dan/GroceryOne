import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from '../Text.tsx';
import {useTheme} from '../../utils/theme/context.tsx';

interface CircleIconProps {
  icon: string;
  onPress: () => void;
  text: string;
}

const CircleIcon: React.FC<CircleIconProps> = ({icon, onPress, text}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: colors.background, borderColor: colors.primary},
      ]}
      onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        style={[styles.icon, {color: colors.primary}]}
      />
      <View style={styles.buffer} />
      <Text
        text={text}
        style={[styles.text, {color: colors.primary}]}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buffer: {width: '20%'},
  button: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'flex-start',
    marginVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  icon: {
    fontSize: 20,
  },
  text: {
    fontSize: 19,
    marginBottom: -2,
    padding: 0,
  },
});

export default CircleIcon;
