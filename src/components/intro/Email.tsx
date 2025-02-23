import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {signIn, signUp, confirmSignUp} from 'aws-amplify/auth';

import ConfirmationCodeInput from '../input/ConfirmationCode.tsx';
import EmailInput from '../input/Email.tsx';

const Email = () => {
  const [confirmationCode, setConfirmationCode] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);

  const handleSignIn = async () => {
    try {
      const {nextStep: signInNextStep} = await signIn({
        username: email,
        password: password,
      });
      if (signInNextStep.signInStep === 'DONE') {
        console.log('Sign-in successful');
      } else {
        // Handle other steps if necessary (e.g., MFA)
        console.log('Next step:', signInNextStep);
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };
  const handleSignUp = async () => {
    try {
      const {nextStep: signUpNextStep} = await signUp({
        username: email,
        password: password,
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
        setIsConfirming(true);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };
  const handleConfirmSignUp = async () => {
    try {
      const {nextStep: confirmSignUpNextStep} = await confirmSignUp({
        username: email,
        confirmationCode: confirmationCode,
      });

      if (confirmSignUpNextStep.signUpStep === 'DONE') {
        console.log('SignUp Complete');
        Alert.alert('Sign Up Complete');
        handleSignupComplete();
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };
  return (
    <View>
      <EmailInput
        input={{
          onChangeText: setEmail,
        }}
        placeholder="Enter email"
      />
      <EmailInput
        input={{
          onChangeText: setPassword,
          onSubmitEditing: async () => {
            await handleSignIn();
          },
        }}
        placeholder="Password"
        secure={true}
      />
      {isConfirming && (
        <ConfirmationCodeInput
          input={{
            onChangeText: setConfirmationCode,
            onSubmitEditing: async () => {
              await handleConfirmSignUp();
            },
          }}
        />
      )}
    </View>
  );
};

export default Email;
