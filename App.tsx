import React from 'react';
import { Signin } from './src/pages/Signin';

import { ThemeProvider } from 'styled-components';

import { theme } from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Signin />
    </ThemeProvider>
  );
}
