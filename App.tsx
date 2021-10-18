import React from 'react';
import { StatusBar } from 'react-native';

import { useFonts } from 'expo-font';
import { Signin } from './src/pages/Signin';
import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';
import { theme } from './src/global/styles/theme';
import { Rajdhani_500Medium, Rajdhani_700Bold }  from '@expo-google-fonts/rajdhani';
import { Inter_400Regular, Inter_500Medium }  from '@expo-google-fonts/inter';


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
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Signin />
    </ThemeProvider>
  );
}
