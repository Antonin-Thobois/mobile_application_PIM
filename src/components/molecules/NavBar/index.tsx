import React from "react"
import Logo from "../Logo"
import { StyleSheet, View, Text } from 'react-native';

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
        // display: "flex",
        justifyContent: "space-around",
        // alignItems: "flex-start",
        flexDirection : "row",
        //flexWrap: "wrap",
    },
    phrasesStyle : {
        marginTop : 20
    },
    mantraStyle :{
        color : "#69a88d",
        fontSize: 10,
        fontFamily: "normal",
    },
    acrrocheStyle : {
        color : "#3E7A6E",
        fontSize: 10,
        fontFamily: "normal",
    },
})

