import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';

import Text from './Text.tsx';
import {useTheme} from '../utils/theme/context.tsx';

interface SettingsRowProps {
  color: string;
  title: string;
  value: boolean;
  onValueChange: () => void;
}

const SettingsRow: React.FC<SettingsRowProps> = ({
  title,
  value,
  onValueChange,
}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.aLayer}>
      <Text text={title} style={[styles.text, {color: colors.primary}]} />
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  aLayer: {
    padding: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 26,
  },
});

export default SettingsRow;
