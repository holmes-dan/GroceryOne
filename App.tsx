import React from 'react';
import {Amplify} from 'aws-amplify';
import {Authenticator} from '@aws-amplify/ui-react-native';

import Navigator from './src/navigation/Navigator.tsx';
import outputs from './amplify_outputs.json';
import {ThemeProvider} from './src/utils/theme/context.tsx';

Amplify.configure(outputs);

const App = () => {
  return (
    <Authenticator.Provider>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </Authenticator.Provider>
  );
};

export default App;
