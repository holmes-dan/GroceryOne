import React, {ReactNode} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {useTheme} from '../../utils/theme/context.tsx';

interface EmailInputProps {
  icon: ReactNode;
  input: TextInputProps;
  topMargin?: number;
}

const EmailInput: React.FC<EmailInputProps> = ({input}) => {
  const {colors} = useTheme();
  return (
    <View
      style={[styles.loginRowView, {borderBottomColor: colors.onBackground}]}>
      <TextInput
        style={[styles.loginInput, {color: colors.onBackground}]}
        placeholderTextColor={colors.outline}
        placeholder="Enter email"
        autoCapitalize="none"
        spellCheck={false}
        {...input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginInput: {marginTop: 2, marginEnd: 5, fontSize: 20, flex: 1},
  loginRowView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 1,
    topMargin: 10,
  },
  androidLoginTextInput: {marginBottom: -10},
  iosLoginTextInput: {marginBottom: 6},
});

export default EmailInput;
