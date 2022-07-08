import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Authentification, Home, PassworChange, Profil, Registration } from "../pages";
import { RootDrawerNavigator } from "./RootDrawerNavigator";

export type RouteStackParams = {
    Profil: undefined;
    Authentification: undefined;
    RootDrawerNavigation: undefined;
    Registration: undefined;
    ChangePassword: undefined;
}

const RootStack = createStackNavigator<RouteStackParams>();

export const RootStackNavigator = () => {
    return (
        <RootStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#96C0AC" 
            },
            headerTitleStyle:{
                color: "#7a7a7a"
            }
        }}>
            <RootStack.Screen name="RootDrawerNavigation" component={RootDrawerNavigator} options={{
                headerShown: false
            }}/>
            <RootStack.Screen name="Profil" component={Profil} />
            <RootStack.Screen name="Authentification" component={Authentification} />
            <RootStack.Screen name="Registration" component={Registration} />
            <RootStack.Screen name="ChangePassword" component={PassworChange} />
        </RootStack.Navigator>
    )
}