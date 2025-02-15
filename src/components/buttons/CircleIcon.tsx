import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useTheme} from '../../utils/theme/context.tsx';

interface CircleIconProps {
  name: string;
  onPress: () => void;
}

const CircleIcon: React.FC<CircleIconProps> = ({name, onPress}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors.primary}]}
      onPress={onPress}>
      <FontAwesome6
        name={name}
        style={[styles.icon, {color: colors.background}]}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default CircleIcon;
