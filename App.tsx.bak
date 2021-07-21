import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Inter_400Regular, Inter_500Medium  } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  //Segura a tela de Splash até carregar as fonts
  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    // Tudo esta dentro dos seguintes simbolos "<> </>" se torna uma unica tela por exigencia da linguagem.
    <Background> 
      <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          
        />
      <Routes />
    </Background>
  );
}
