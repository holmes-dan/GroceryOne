import React, {useState} from 'react';
import {View} from 'react-native';

import ConfirmationCodeInput from '../input/ConfirmationCode.tsx';
import EmailInput from '../input/Email.tsx';

const Email = () => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [email, setEmail] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);

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
        username: 'hello',
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
          onSubmitEditing: async () => {
            await handleSignUp();
          },
        }}
        placeholder="Enter email"
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
