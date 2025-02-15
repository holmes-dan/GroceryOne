import React, {ReactNode} from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {useTheme} from '../utils/theme/context.tsx';

interface InfoRowProps {
  icon: ReactNode;
  input: TextInputProps;
  topMargin?: number;
}

const InfoRow: React.FC<InfoRowProps> = ({icon, input, topMargin}) => {
  const platformStyle =
    Platform.OS === 'ios'
      ? styles.iosLoginTextInput
      : styles.androidLoginTextInput;
  const {colors} = useTheme();
  return (
    <View
      style={[
        styles.loginRowView,
        {marginTop: topMargin, borderBottomColor: colors.onBackground},
      ]}>
      {icon}
      <TextInput
        style={[styles.loginInput, platformStyle, {color: colors.onBackground}]}
        placeholderTextColor={colors.outline}
        autoCapitalize="none"
        spellCheck={false}
        {...input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginInput: {
    marginTop: 2,
    marginEnd: 5,
    fontSize: 20,
    flex: 1,
  },
  loginRowView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 1,
  },
  androidLoginTextInput: {
    marginBottom: -10,
  },
  iosLoginTextInput: {
    marginBottom: 6,
    //marginStart: 25,
  },
});

export default InfoRow;
