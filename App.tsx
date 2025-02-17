import React from 'react';

import Navigator from './src/navigation/Navigator.tsx';
import {ThemeProvider} from './src/utils/theme/context.tsx';

const App = () => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
};

export default App;
