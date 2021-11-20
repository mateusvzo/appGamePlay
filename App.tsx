import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';

import { ThemeProvider } from 'styled-components';
import { Background } from './src/components/Background';
import { theme } from './src/global/styles/theme';

import { useFonts } from 'expo-font';
import { Rajdhani_500Medium, Rajdhani_700Bold }  from '@expo-google-fonts/rajdhani';
import { Inter_400Regular, Inter_500Medium }  from '@expo-google-fonts/inter';

import { Routes } from './src/routes'


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
    <Background>
      <ThemeProvider theme={theme}>
        <StatusBar 
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        <Routes />
      </ThemeProvider>
    </Background>
  );
}
