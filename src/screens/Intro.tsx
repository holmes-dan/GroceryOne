import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import Email from '../components/intro/Email.tsx';
import LoginButton from '../components/buttons/Login.tsx';
import Logo from '../assets/images/logo.svg';
import Text from '../components/Text.tsx';
import {useTheme} from '../utils/theme/context.tsx';

interface IntroScreenProps {
  navigation: NavigationProp<ParamListBase>;
}
const IntroScreen: React.FC<IntroScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const loginOptions = {
    Apple: {icon: 'apple', action: () => navigation.navigate('Home')},
    Google: {icon: 'google', action: () => {}},
    Facebook: {icon: 'facebook', action: () => {}},
    email: {icon: 'email', action: () => setShowEmail(prev => !prev)},
  };
  const [showEmail, setShowEmail] = useState(false);
  return (
    <SafeAreaView style={[styles.aLayer, {backgroundColor: colors.background}]}>
      <View style={styles.bLayer}>
        <Logo fill={colors.logo} height={72} width={80} />
        <Text
          text={'The one app you need to get groceries.'}
          style={[styles.header, {color: colors.primary}]}
          lines={2}
        />
        {/* <Image source={cartImage} style={styles.introCart} /> */}
        <Text
          text={'Continue with ...'}
          style={[styles.introHeader2, {color: colors.outline}]}
        />

        <View style={styles.introButtonsView}>
          {Object.entries(loginOptions).map(([key, value]) => (
            <LoginButton onPress={value.action} text={key} icon={value.icon} />
          ))}
        </View>
        {showEmail && <Email />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  aLayer: {flex: 1},
  bLayer: {marginHorizontal: 20},
  header: {marginTop: 20},
});

export default IntroScreen;
