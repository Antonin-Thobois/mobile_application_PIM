import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { RootDrawerNavigator } from './src/navigation/RootDrawerNavigator';
import React, { useCallback, useEffect } from "react";
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';
import { fetchFonts } from './src/assets/fonts/fetchFont';
import { View } from 'react-native';

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        fetchFonts;
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setfontLoaded(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <NavigationContainer>        
        <RootDrawerNavigator />
      </NavigationContainer>
    </View>
  );
}
