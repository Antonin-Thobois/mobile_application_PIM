import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { CustomDrawer } from "../components/organisms";
import HomeIcon from "../icons/HomeIcon";
import InformationIcon from "../icons/InformationIcon";
import PresentIcon from "../icons/PresentIcon";
import TeamIcon from "../icons/TeamIcon";
import TrophyIcon from "../icons/TrophyIcon";
import { Home, Authentification, Challenge, Associations, Donor, Team } from "../pages";

export type RouteParams = {
    Home: undefined;
    Authentification: undefined;
    Challenge: undefined;
    Associations: undefined;
    Donor: undefined;
    Team: undefined;
}

const RootStack = createDrawerNavigator<RouteParams>();

export const RootNavigator = () => {
    return (
        <RootStack.Navigator drawerContent={props => <CustomDrawer user={undefined} {...props} />} initialRouteName="Home" screenOptions={{headerShown: false}}>
            <RootStack.Screen name="Home" component={Home} options={{
                drawerLabel: "Acceuil",
                drawerIcon: ({color = "#7a7a7a"}) => (
                    <HomeIcon size={22} color={color} /> 
                )
            }} />
            <RootStack.Screen name="Authentification" component={Authentification} options={{
                drawerLabel: "Authentification"
            }} />
            <RootStack.Screen name="Challenge" component={Challenge} options={{
                drawerLabel: "Défis",
                drawerIcon: ({color = "#7a7a7a"}) => (
                    <TrophyIcon size={22} color={color} /> 
                )
            }} />
            <RootStack.Screen name="Associations" component={Associations} options={{
                drawerLabel: "Associations",
                drawerIcon: ({color = "#7a7a7a"}) => (
                    <TeamIcon size={22} color={color} /> 
                )
            }} />
            <RootStack.Screen name="Donor" component={Donor} options={{
                drawerLabel: "Donateur",
                drawerIcon: ({color = "#7a7a7a"}) => (
                    <PresentIcon size={22} color={color} /> 
                )
            }} />
            <RootStack.Screen name="Team" component={Team} options={{
                drawerLabel: "L'équipe",
                drawerIcon: ({color = "#7a7a7a"}) => (
                    <InformationIcon size={22} color={color} /> 
                )
            }} />
        </RootStack.Navigator>
    )
}