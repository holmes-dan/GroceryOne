import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import CircleIcon from './CircleIcon.tsx';

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
  rightIcon,
  rightOnPress,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.listButtonsView, style]}>
      <CircleIcon name={leftIcon} onPress={leftOnPress} />
      <CircleIcon name={rightIcon} onPress={rightOnPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listButtonsView: {
    bottom: 0,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    position: 'absolute',
  },
});

export default BottomButtons;
