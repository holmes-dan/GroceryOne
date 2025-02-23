import React from 'react';
import {Amplify} from 'aws-amplify';
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react-native';

import Navigator, {SignIn} from './src/navigation/Navigator.tsx';
import outputs from './amplify_outputs.json';
import {ThemeProvider} from './src/utils/theme/context.tsx';

Amplify.configure(outputs);

const App = () => {
  return (
    <Authenticator.Provider>
      <ThemeProvider>
        <MainNavigator />
      </ThemeProvider>
    </Authenticator.Provider>
  );
};

const MainNavigator = () => {
  const {user} = useAuthenticator(context => [context.user]);
  return user ? <Navigator /> : <SignIn />;
};

export default App;
