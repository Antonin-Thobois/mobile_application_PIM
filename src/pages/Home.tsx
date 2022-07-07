import TopDrawerNavigation from '../Menu/TopDrawerNavigation';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteParams } from '../navigation/RootNavigator';
import { useNavigation } from '@react-navigation/native';

type Props = {}

const Home = (props: Props) => {

    const navigation = useNavigation<DrawerNavigationProp<RouteParams>>()

    return (
        <View style = {styles.container}>
            <TopDrawerNavigation />
            <View style = {styles.blockStyle}>
                <Text style = {styles.titreStyle}>Défis en cours</Text>
                <View style = {styles.placeButtonStyle}>
                    <Pressable style = {styles.buttonStyle} onPress={() => navigation.navigate("Challenge")}
>
                        <Text style = {styles.buttonTitreStyle}>ACCEDER AUX DEFIS</Text>
                    </Pressable>
                </View>
            </View>
            <ScrollView style = {styles.blockStyle}>
                <Text style = {styles.titreStyle}>Infos & Derniers Evènements</Text>
                <Text style = {styles.corpsStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style = {styles.corpsStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style = {styles.corpsStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style = {styles.corpsStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style = {styles.corpsStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style = {styles.corpsStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style = {styles.corpsStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style = {styles.corpsStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style = {styles.corpsStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style = {styles.corpsStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        padding: 16,
        paddingTop: 40,
        flex: 1,
        backgroundColor : "#ECEBE1",
    },

    placeButtonStyle:{
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30,
    },
    
    buttonStyle:{
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        backgroundColor: '#528F7C',
        color: "#62A188",
        width: wp ('50%'),
    },

    buttonTitreStyle:{
        color: "#ECEBE1",
        fontFamily : 'helvetica',
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize :RFPercentage (2),

    },

    titreStyle:{
        color: "#3E7A6E",
        fontFamily : 'asap',
        fontWeight: 'bold',
        fontSize : 20,
    },

    corpsStyle:{
        color: "#7A7A7A",
        fontFamily: "quicksand",
        textAlign : 'justify',
        padding :5,
    },

    blockStyle: {
        borderWidth: 2.5,
        borderColor: "#62A188",
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 5,
        paddingLeft: 5,
    }
})