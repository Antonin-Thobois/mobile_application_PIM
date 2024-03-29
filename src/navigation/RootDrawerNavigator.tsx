import { createDrawerNavigator } from "@react-navigation/drawer";
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";
import { CustomDrawer } from "../components/organisms";
import DoorIcon from "../icons/DoorIcon";
import HomeIcon from "../icons/HomeIcon";
import InformationIcon from "../icons/InformationIcon";
import PresentIcon from "../icons/PresentIcon";
import TeamIcon from "../icons/TeamIcon";
import TrophyIcon from "../icons/TrophyIcon";
import { Home, Challenge, Associations, Donor, Team } from "../pages";

export type RouteParams = {
    Home: undefined;
    Challenge: undefined;
    Associations: undefined;
    Donor: undefined;
    Team: undefined;
    Root: undefined;
}

const RootDrawer = createDrawerNavigator<RouteParams>();

export const RootDrawerNavigator = () => {
    let user = auth.currentUser;
    return (
        <RootDrawer.Navigator drawerContent={props => <CustomDrawer {...props} />} 
            initialRouteName="Home" 
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: "#528F7C",
                drawerActiveTintColor: "#ECEBE1",
                drawerInactiveTintColor: "#7a7a7a",
                drawerInactiveBackgroundColor: "#96C0AC",
                drawerLabelStyle:{
                    marginLeft: -15,
                    fontSize: 15
                }
            }}>
            <RootDrawer.Screen name="Home" component={Home} options={{
                drawerLabel: "Accueil",
                drawerIcon: ({color = "#7a7a7a"}) => (
                    <HomeIcon size={22} color={color} /> 
                )
            }} />
            <RootDrawer.Screen name="Challenge" component={Challenge} options={{
                drawerLabel: "Défis",
                drawerIcon: ({color = "#7a7a7a"}) => (
                    <TrophyIcon size={22} color={color} /> 
                )
            }} />
            <RootDrawer.Screen name="Associations" component={Associations} options={{
                drawerLabel: "Associations",
                drawerIcon: ({color = "#7a7a7a"}) => (
                    <TeamIcon size={22} color={color} /> 
                )
            }} />
            <RootDrawer.Screen name="Donor" component={Donor} options={{
                drawerLabel: "Donateur",
                drawerIcon: ({color = "#7a7a7a"}) => (
                    <PresentIcon size={22} color={color} /> 
                )
            }} />
            <RootDrawer.Screen name="Team" component={Team} options={{
                drawerLabel: "L'équipe",
                drawerIcon: ({color = "#7a7a7a"}) => (
                    <InformationIcon size={22} color={color} /> 
                )
            }} />
            
        </RootDrawer.Navigator>
    )
}