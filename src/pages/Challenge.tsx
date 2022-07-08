import {View, Text, StyleSheet, ScrollView, Button, Pressable, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import TopDrawerNavigation from '../Menu/TopDrawerNavigation'
import { doc, getDocs, getDoc } from '@firebase/firestore'
import {defisCol} from "../../firebase";
import {RFPercentage} from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

const Challenge = () => {

    const [description, setDescription] = useState('')
    const [gain, setGain] = useState('')
    const [exp, setExp] = useState('')
    const [titre, setTitre] = useState('')
    const [duree, setDuree] = useState('')

    // Récupérer la collection defis de Firestore
    const getDefis = async () => {
        const defisDocs = await getDocs(defisCol)
        console.log(defisDocs)
        defisDocs.docs.forEach((defisDoc) => {
            const defis = defisDoc.data()
            //console.log(defisDocs)
            console.log("Mon défis "+ defis)
            setDescription(defis.description)
            setGain(defis.gain)
            setExp(defis.exp)
            setTitre(defis.titre)
            setDuree(defis.duree)
        })
    }
    setTimeout(() => {
        console.log(getDefis())
    },5000)


  return (
    <View style={styles.container}>
      <TopDrawerNavigation/>
        <ScrollView style = {styles.blockStyle}>
            <View style={styles.Align}>
                <Text style = {styles.titreStyle}>
                    Défi {duree}
                </Text>
                {/*Mettre des icones pour chaque texte en-dessous*/}
                <Text>Exp</Text>
                <Text>{exp}</Text>
                <Text>Gain</Text>
                <Text>{gain}</Text>
            </View>
            <View style={styles.titreDefis}>
                <Text>{titre}</Text>
            </View>
            <Text>{description}</Text>
            <View style={styles.placeButtonStyle}>
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.buttonStyle}
                >
                    <Text style={styles.buttonTitreStyle}>Défi réalisé</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  )
}

export default Challenge

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 40,
        backgroundColor: '#ECEBE1',
        display: "flex",
        flex: 1,
    },
    Align: {
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:15
    },
    blockStyle: {
        borderWidth: 2.5,
        borderColor: "#62A188",
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 5,
        paddingLeft: 5,
    },
    titreStyle:{
        color: "#3E7A6E",
        fontFamily : 'asap',
        fontWeight: 'bold',
        fontSize : 20,
        paddingLeft: 15,
    },
    titreDefis:{
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'Helvetica',
        fontWeight:"bold",
        paddingBottom:15,
        paddingTop:15,
        color: '#7a7a7a'
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
    placeButtonStyle:{
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30,
    },
})
