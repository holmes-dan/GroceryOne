import React, {ReactNode, useState} from 'react';
import {ScrollView, StyleSheet, KeyboardAvoidingView} from 'react-native';

import Text from './Text.tsx';
import {useTheme} from '../utils/theme/context.tsx';
import InfoRow from './InfoRow.tsx';

export interface InputBoxProps {
  label: string;
  icon: ReactNode;
  onEntriesChange: (entries: string[]) => void;
}

export const InputBox: React.FC<InputBoxProps> = ({
  label,
  icon,
  onEntriesChange,
}) => {
  const [value, setValue] = useState('');
  const [entries, setEntries] = useState<string[]>(['None']);

  const handleChangeText = (text: string) => {
    setValue(text);
  };
  const handleEnterText = () => {
    const newEntries = [...entries, value];
    setEntries(newEntries);
    setValue('');
    onEntriesChange(newEntries);
  };
  const {colors} = useTheme();
  return (
    <KeyboardAvoidingView style={styles.inputBoxColumn}>
      <InfoRow
        icon={icon}
        input={{
          value: value,
          placeholder: label,
          style: [styles.tastesInput, {color: colors.onBackground}],
          onChangeText: handleChangeText,
          onSubmitEditing: handleEnterText,
        }}
      />
      <ScrollView
        style={[styles.inputBoxScrollView, {borderColor: colors.onBackground}]}>
        {entries &&
          entries.map((entry, index) => (
            <Text
              key={index}
              style={[styles.inputBoxScrollText, {color: colors.primary}]}>
              {entry}
            </Text>
          ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputBoxColumn: {
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '35%',
    marginRight: -100,
    marginLeft: -100,
  },
  inputBoxScrollView: {
    height: 250,
    width: '40%',
    borderWidth: 1,
  },
  inputBoxScrollText: {
    marginTop: 2,
    marginStart: 6,
  },
  tastesInput: {
    marginTop: 3,
    marginEnd: 5,
    fontSize: 15,
    width: '32%',
  },
});

export default InputBox;
