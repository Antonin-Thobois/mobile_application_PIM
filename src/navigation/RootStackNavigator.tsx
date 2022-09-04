import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Authentification, Home, PassworChange, Profil, Registration } from "../pages";
import Donate from "../pages/Donate";
import { RootDrawerNavigator } from "./RootDrawerNavigator";

export type RouteStackParams = {
    Profil: undefined;
    Authentification: undefined;
    RootDrawerNavigation: undefined;
    Registration: undefined;
    ChangePassword: undefined;
    Donate: undefined;
}

const RootStack = createStackNavigator<RouteStackParams>();

export const RootStackNavigator = () => {
    return (
        <RootStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#ECEBE1" 
            },
            headerTitleStyle:{
                color : "#69a88d",
                fontWeight : "bold",
                fontSize: RFPercentage (2.8),
                fontVariant : ['small-caps'],
            }
        }}>
            <RootStack.Screen name="RootDrawerNavigation" component={RootDrawerNavigator} options={{
                headerShown: false
            }}/>
            <RootStack.Screen name="Profil" component={Profil} />
            <RootStack.Screen name="Authentification" component={Authentification} />
            <RootStack.Screen name="Registration" component={Registration} options={{title:"Création d'un profil"}}/>
            <RootStack.Screen name="ChangePassword" component={PassworChange} options={{title:'Changement de Mot de Passe'}}/>
            <RootStack.Screen name="Donate" component={Donate} options={{ title: "Faire un don"}}/>
        </RootStack.Navigator>
    )
}