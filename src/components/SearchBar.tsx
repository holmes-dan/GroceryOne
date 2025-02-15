import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';

import FontAwesome6 from 'react-native-vector-icons/Ionicons';

import {useTheme} from '../utils/theme/context.tsx';

interface Props {
  input: TextInputProps;
}

const SearchBar: React.FC<Props> = ({input}) => {
  const {colors} = useTheme();
  return (
    <View
      style={[styles.loginRowView, {borderBottomColor: colors.onBackground}]}>
      <FontAwesome6
        name="search"
        style={[styles.icon, {color: colors.primary}]}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Search for recipes"
        placeholderTextColor={colors.outline}
        spellCheck={false}
        style={[styles.loginInput, {color: colors.onBackground}]}
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
    borderBottomWidth: 2,
    marginBottom: 10,
    paddingBottom: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  androidLoginTextInput: {marginBottom: -10},
  iosLoginTextInput: {marginBottom: 6},
  icon: {
    marginEnd: 5,
    marginTop: 3,
    marginBottom: 3,
    fontSize: 20,
  },
});

export default SearchBar;
