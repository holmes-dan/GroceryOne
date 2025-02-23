import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import Text from './Text.tsx';
import {useTheme} from '../utils/theme/context.tsx';

interface RecipeEditorProps {
  servings: number;
  name: string;
  onPress: () => void;
  uri: string;
}

const RecipeEditor: React.FC<RecipeEditorProps> = ({name, onPress, uri}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text
        text={servings}
        style={[styles.text, {color: colors.onBackground}]}
      />
      <Image style={styles.image} source={{uri: uri}} />
      <Text text={name} style={[styles.text, {color: colors.onBackground}]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: -5,
  },
  image: {
    height: 11,
    width: 11,
  },
  text: {
    fontSize: 11,
  },
});

export default RecipeEditor;
