import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Authentification, Profil } from "../pages";

export type RouteStackParams = {
    Profil: undefined;
    Authentification: undefined;
}

const RootStack = createStackNavigator<RouteStackParams>();

export const RootStackNavigator = () => {
    return (
        <RootStack.Navigator >
           <RootStack.Screen name="Profil" component={Profil}/>
           <RootStack.Screen name="Authentification" component={Authentification} />
        </RootStack.Navigator>
    )
}