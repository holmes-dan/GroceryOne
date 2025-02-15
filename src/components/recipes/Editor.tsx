import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import Text from '../Text.tsx';
import {useTheme} from '../../utils/theme/context.tsx';

const RecipeEditor = ({name, onPress, size = 80, style={}, uri}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image style={{width: size, height: size}} source={{uri: uri}} />
      <Text text={name} style={[styles.text, {color: colors.onBackground}]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: -5,
  },
  text: {
    fontSize: 11,
  },
});

export default RecipeEditor;
