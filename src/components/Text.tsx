import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

interface TextProps {
  level?: 1 | 2 | 3 | 4 | 5;
  lines?: number;
  numberOfLines?: number; // Add this prop to control the number of lines
  style?: TextStyle;
  text: string;
}

const StyledText: React.FC<TextProps> = ({
  level = 1,
  lines = 1,
  style,
  text,
}) => {
  return (
    <Text
      numberOfLines={lines}
      ellipsizeMode="tail"
      style={[styles.text, styles[`l${level}`], style]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  l1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  l2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  l3: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    alignSelf: 'center',
  },
  l4: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    alignSelf: 'center',
  },
  l5: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 8,
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
  },
});

export default StyledText;
