import React from 'react';

import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium }  from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold }  from '@expo-google-fonts/rajdhani';

import { ThemeProvider } from 'styled-components';
import { theme } from './src/global/styles/theme';

import { Signin } from './src/pages/Signin';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({ 
    Inter_400Regular, 
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Signin />
    </ThemeProvider>
  );
}
