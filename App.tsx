import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { RootNavigator } from './src/navigation/RootNavigator';
import {Authentification, Home} from "./src/pages";
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Authentification" component={Authentification}/>
        </Drawer.Navigator>
        
      {/*<RootNavigator />*/}
      {/*<StatusBar style="auto" />*/}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ECEBE1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
