import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Authentification, RegistrationView } from "../pages";
import { NavBar } from "../components/molecules";

export type RouteParams = {
    Home: undefined;
    Authentification: undefined;
    Registration: undefined;
}

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Authentification">
            <Stack.Group>
                <Stack.Screen name="Home" component={Home} options={{
                    headerTitle: ()=> <NavBar/>,
                    headerStyle: {
                        backgroundColor : "#ECEBE1",
                    }
                }} />
                <Stack.Screen name="Authentification" component={Authentification} options={{
                    animation: "slide_from_right",
                }} />
                <Stack.Screen name="Registration" component={RegistrationView} options={{
                    animation: "slide_from_right",
                }} />
            </Stack.Group>
        </Stack.Navigator>
    )
}