import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useNavigation, useRoute, useNavigationBuilder } from '@react-navigation/core'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { RouteParams } from '../navigation/RootDrawerNavigator'
import Logo from "../components/molecules/Logo"
import { RFPercentage } from "react-native-responsive-fontsize";

const TopDrawerNavigation = () => {
  const navigation = useNavigation<DrawerNavigationProp<RouteParams>>()
  const route = useRoute()
  let label = "";
  
  switch(route.name){
    case "Home":
      label = "NaturaDéfi";
      break;
    case "Donor":
      label = "Donateur";
      break;
    case "Team":
      label = "L'équipe";
      break;
    case "Challenge":
      label = "Défis";
      break;
    default:
      label = route.name;
      break;
  }

  return (
    <View style={styles.headerStyle}>
        <Logo onPress={() => { navigation.openDrawer(); }}/>
        <View style={styles.phrasesStyle}>
            <Text style={styles.mantraStyle}>{label}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
      flexDirection : "row",
      alignItems: "center",
      borderBottomWidth : 1,
      borderBottomColor : "#CCCCCC",
      opacity : 30,
      borderStyle : "solid",
  },
  phrasesStyle : {
      flex: 1,
      marginLeft : 10,
  },
  mantraStyle :{
      color : "#69a88d",
      fontFamily: "quicksand",
      fontWeight : "bold",
      fontSize: RFPercentage (2),
  },
  acrrocheStyle : {
      color : "#3E7A6E",
      fontFamily: "quicksand",
      fontWeight : "bold",
      fontSize: RFPercentage (2),
  },
})

export default TopDrawerNavigation