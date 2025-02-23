import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import InputBox from '../components/InputBox.tsx';
import {useTheme} from '../utils/theme/context.tsx';

const Tastes: React.FC<TastesProps> = ({navigation}) => {
  const {colors} = useTheme();
  const [tastes, setTastes] = useState<Record<string, string[]>>({
    likes: [],
    dislikes: [],
    allergies: [],
    diet: [],
    conditions: [],
    stores: [],
  });
  const handleTasteChange = (tasteType: string) => (newTaste: string[]) => {
    setTastes(prevTastes => ({...prevTastes, [tasteType]: newTaste}));
  };
  return (
    <SafeAreaView
      style={[styles.tastesSafeAreaView, {backgroundColor: colors.background}]}>
      <View style={styles.tastesTopInputBox}>
        <InputBox
          label="Likes"
          icon={
            <AntDesign
              name={'like2'}
              style={[styles.loginIcons, {color: colors.onBackground}]}
            />
          }
          onEntriesChange={handleTasteChange('likes')}
          startEntries={tastes.likes}
        />
        <InputBox
          label="Dislikes"
          icon={
            <AntDesign
              name={'dislike2'}
              style={[styles.loginIcons, {color: colors.onBackground}]}
            />
          }
          onEntriesChange={handleTasteChange('dislikes')}
          startEntries={tastes.dislikes}
        />
      </View>
      <View style={styles.tastesInputBox}>
        <InputBox
          label="Allergies"
          icon={
            <Feather
              name={'alert-triangle'}
              style={[styles.loginIcons, {color: colors.onBackground}]}
            />
          }
          onEntriesChange={handleTasteChange('allergies')}
          startEntries={tastes.allergies}
        />
        <InputBox
          label="Diet"
          icon={
            <Ionicons
              name={'restaurant-outline'}
              style={[styles.loginIcons, {color: colors.onBackground}]}
            />
          }
          onEntriesChange={handleTasteChange('diet')}
          startEntries={tastes.diet}
        />
      </View>
      <View style={styles.tastesInputBox}>
        <InputBox
          label="Health Conditions"
          icon={
            <MaterialCommunityIcons
              name={'hospital-box-outline'}
              style={[styles.loginIcons, {color: colors.onBackground}]}
            />
          }
          onEntriesChange={handleTasteChange('conditions')}
          startEntries={tastes.conditions}
        />
        <InputBox
          label="Grocery Stores"
          icon={
            <MaterialCommunityIcons
              name={'storefront-outline'}
              style={[styles.loginIcons, {color: colors.onBackground}]}
            />
          }
          onEntriesChange={handleTasteChange('stores')}
          startEntries={tastes.stores}
        />
      </View>
      <Button
        onPress={() => {
          handleSave();
          navigation.navigate('Home');
        }}
        title="Save Changes"
        style={[styles.tastesSaveButton, {color: colors.background}]}
      />
      <Button
        style={[styles.tastesSkipButton, {color: colors.background}]}
        onPress={() => navigation.navigate('Home')}
        title="Skip for now"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tastesSafeAreaView: {
    flex: 1,
    flexDirection: 'column',
  },
  tastesInputBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: -100,
    marginBottom: -80,
  },
  tastesSaveButton: {
    alignSelf: 'center',
    marginTop: -50,
    width: '75%',
    borderRadius: 0,
  },
  tastesSkipButton: {
    marginTop: 10,
  },
  tastesTopInputBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    marginBottom: -80,
  },
  loginHeader: {
    marginTop: 40,
    marginBottom: 40,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
  },
  loginIcons: {
    marginEnd: 5,
    marginTop: 3,
    marginBottom: 3,
    fontSize: 20,
  },
});

export default Tastes;
