import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { RootDrawerNavigator } from './src/navigation/RootDrawerNavigator';
import React from "react";
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import { fetchFonts } from './src/assets/fonts/fetchFont';
import { RootStackNavigator } from './src/navigation/RootStackNavigator';


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
      <RootStackNavigator />
    </NavigationContainer>
  );
}
