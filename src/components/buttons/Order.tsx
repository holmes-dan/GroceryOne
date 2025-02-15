import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CircleIcon from './CircleIcon.tsx';
import Text from '../Text.tsx';
import {useTheme} from '../../utils/theme/context.tsx';

interface BottomButtonsProps {
  leftIcon: string;
  leftNavigation: string;
  rightIcon: string;
  rightNavigation: string;
  style?: StyleProp<ViewStyle>;
}

const BottomButtons: React.FC<BottomButtonsProps> = ({
  leftIcon,
  leftOnPress,
  orderOnPress,
  rightIcon,
  rightOnPress,
  style,
}) => {
  const {colors} = useTheme();
  const borderColor = colors.primary;
  const iconColor = colors.onBackground;
  return (
    <View style={[styles.listButtonsView, style]}>
      <CircleIcon
        borderColor={borderColor}
        iconColor={iconColor}
        name={leftIcon}
        onPress={leftOnPress}
      />
      <TouchableOpacity
        style={[styles.navButton, {backgroundColor: colors.secondary}]}
        onPress={orderOnPress}>
        <Ionicons
          name={'restaurant'}
          style={[styles.icon, {color: colors.background}]}
        />
        <Text text="Order" style={[styles.text, {color: colors.background}]} />
      </TouchableOpacity>
      <CircleIcon
        borderColor={borderColor}
        iconColor={iconColor}
        name={rightIcon}
        onPress={rightOnPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listButtonsView: {
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    margin: 25,
    marginBottom: 0,
  },
  aLayer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
  },
  icon: {
    fontSize: 25,
  },
  navButton: {
    alignItems: 'center',
    borderRadius: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    marginHorizontal: 35,
  },
  text: {
    marginLeft: 3,
    marginTop: 6,
    fontSize: 30,
  },
});

export default BottomButtons;
