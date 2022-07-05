import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Home, Authentification } from "../pages";

export type RouteParams = {
    Home: undefined;
    Authentification: undefined;
}

const RootStack = createDrawerNavigator<RouteParams>();

export const RootNavigator = () => {
    return (
        <RootStack.Navigator initialRouteName="Authentification" screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#e67a15',
            tabBarInactiveTintColor: 'gray',
          })}>
            <RootStack.Screen name="Home" component={Home} options={{
                drawerLabel: "Home",
            }} />
            <RootStack.Screen name="Authentification" component={Authentification} options={{
                drawerLabel: "Authentification",
            }} />
        </RootStack.Navigator>
    )
}