import React from "react"
import Logo from "../Logo"
import { StyleSheet, View, Text } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {}

const NavBar = (props: Props) => {
    return (
        <View style={styles.headerStyle}>
            <Logo/>
            <View style={styles.phrasesStyle}>
                <Text style={styles.mantraStyle}>Un petit changement est mieux que pas de changement...</Text>
                <Text style={styles.acrrocheStyle}>PRÊTS A RELEVER LE DEFI ???</Text>
            </View>
        </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection : "row",
        alignItems: "center"
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

