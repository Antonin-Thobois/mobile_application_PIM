import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/RootNavigator';
import React from "react";
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import { fetchFonts } from './src/assets/fonts/fetchFont';

export default function App() {

  const [fontLoaded, setfontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
      startAsync={fetchFonts}
      onError={() => console.log("ERROR")}
      onFinish={() => {
        setfontLoaded(true);
       }}
       />
    )
  }

  return (
    <NavigationContainer>        
      <RootNavigator />
    </NavigationContainer>
  );
}
