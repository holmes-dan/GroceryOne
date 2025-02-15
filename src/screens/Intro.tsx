import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {signUp} from 'aws-amplify/auth';

import ConfirmationCodeInput from '../components/input/ConfirmationCode.tsx';
import EmailInput from '../components/input/Email.tsx';
import LoginButton from '../components/buttons/Login.tsx';
import Text from '../components/Text.tsx';
import {useTheme} from '../utils/theme/context.tsx';

interface IntroScreenProps {
  navigation: NavigationProp<ParamListBase>;
}
const IntroScreen: React.FC<IntroScreenProps> = () => {
  const {colors} = useTheme();
  const [confirmationCode, setConfirmationCode] = useState('');
  const [email, setEmail] = useState('');
  const handleSignUp = async () => {
    try {
      const {nextStep: signUpNextStep} = await signUp({
        username: 'hello',
        options: {
          userAttributes: {
            email: email,
          },
        },
      });
      if (signUpNextStep.signUpStep === 'DONE') {
        console.log('SignUp Complete');
        Alert.alert('Sign Up Complete');
      }
      if (signUpNextStep.signUpStep === 'CONFIRM_SIGN_UP') {
        console.log(
          `Code Delivery Medium: ${signUpNextStep.codeDeliveryDetails.deliveryMedium}`,
        );
        console.log(
          `Code Delivery Destination: ${signUpNextStep.codeDeliveryDetails.destination}`,
        );
        setIsConfirming(true); // Switch to confirmation mode
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };
  const handleConfirmSignUp = async () => {
    try {
      const {nextStep: confirmSignUpNextStep} = await confirmSignUp({
        username: 'hello',
        confirmationCode: confirmationCode,
      });

      if (confirmSignUpNextStep.signUpStep === 'DONE') {
        console.log('SignUp Complete');
        Alert.alert('Sign Up Complete');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };
  const loginOptions = {
    Apple: {icon: 'apple', action: () => {}},
    Google: {icon: 'google', action: () => {}},
    Facebook: {icon: 'facebook', action: () => {}},
    email: {icon: 'email', action: () => setShowEmail(prev => !prev)},
  };
  const [showEmail, setShowEmail] = useState(false);
  return (
    <SafeAreaView style={[styles.aLayer, {backgroundColor: colors.background}]}>
      {/* <Image source={bannerImage} style={styles.introGGBanner} /> */}
      <View style={styles.bLayer}>
        <Text
          text={'The one app you need to get groceries.'}
          style={[styles.introHeader, {color: colors.primary}]}
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
        {showEmail && (
          <View style={styles.emailInputs}>
            <EmailInput
              input={{
                onChangeText: setEmail,
                onSubmitEditing: async () => {
                  await handleSignUp();
                },
              }}
            />
            <ConfirmationCodeInput
              input={{
                onChangeText: setConfirmationCode,
                onSubmitEditing: async () => {
                  await handleConfirmSignUp();
                },
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  aLayer: {flex: 1},
  bLayer: {marginHorizontal: 20},
  emailInputs: {},
});

export default IntroScreen;
