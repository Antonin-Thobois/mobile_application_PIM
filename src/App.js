import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Auth from "./pages/authentification/authentification";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./pages/authentification/homescreen";


const Stack = createNativeStackNavigator();

const App = () => { 
  return (
    <NavigationContainer>
    <Stack.Navigator>
      {/* {
        user ? (
          <Stack.Screen name="Home">
            {props => <Homescreen {...props} extraData={user} /> } 
          </Stack.Screen>
        ) : (
      <> */}
      <Stack.Screen name="Authentification" component={Auth}/>
      <Stack.Screen name="Home" component={Homescreen}/>
      {/* </>
      )} */}
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;