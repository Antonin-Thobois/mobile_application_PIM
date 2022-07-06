import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import React, {useState} from "react";

type Props = {
}

const Profil = (props: Props) => {
    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [niveau, setNiveau] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.Align}>
                <Text style={styles.title}>
                    VOTRE PROFIL
                </Text>
            </View>

            <View style={styles.AlignReverse}>
                <Text style={[styles.Data,styles.buttonDefinir]}>à définir</Text>
                <Text style={[styles.InformationText,styles.Niveau]}>Niveau</Text>
            </View>

            <View style={styles.Align}>
                <Text style={styles.InformationText}>Nom</Text>
                <Text style={styles.Data}>LEDOUX</Text>
            </View>
            <View style={styles.Align}>
                <Text style={styles.InformationText}>Prénom</Text>
                <Text style={[styles.Data, styles.ajustement]}>Océane</Text>
            </View>
            <View style={styles.Align}>
                <Text style={styles.InformationText}>email</Text>
                <Text style={styles.Data}>Email</Text>
            </View>


            <TouchableOpacity
                onPress={() => {}}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Valider les modifications</Text>
            </TouchableOpacity>

            <View style={styles.Align}>
            <TouchableOpacity
                style={[styles.buttonOutline, styles.Align]}
            >
                <Text style={styles.InformationText}>Mot de passe</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {}}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Modification mot de passe</Text>
            </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.text}>Défis</Text>
            </View>

            <View style={styles.Align}>
                <Text style={styles.InformationText}>Nombre de défis réalisés</Text> <br/><br/>
                <Text style={styles.Data}>14</Text>
            </View>

            <View style={styles.Align}>
                <Text style={styles.InformationText}>Montant reversé</Text> <br/><br/>
                <Text style={styles.Data}>67€</Text>
            </View>

            <View style={styles.Align}>
                <Text style={styles.InformationText}>Montant cagnotté</Text> <br/><br/>
                <Text style={styles.Data}>48€</Text>
            </View>
            <View>
            <TouchableOpacity
                onPress={() => {}}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Reverser les gains</Text>
            </TouchableOpacity>
            </View>

        </View>
    )
}

export default Profil

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ECEBE1',
        display:"flex",
        flex: 1,
    },
    Align: {
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:15
    },
    AlignReverse: {
        display:"flex",
        flexDirection:'row-reverse',
        alignItems:'center',
        paddingBottom:15,
        paddingRight: 25
    },
    text: {
        paddingTop:20,
        paddingBottom:15,
        fontSize: 20,
        color:'#69a88d',
        paddingLeft:15,
        fontWeight:"bold"
    },
    input:{
        opacity: 80,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer:{
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    Data:{
        backgroundColor: '#69a88d',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems:'center',
        textAlign:"center",
        marginLeft:90
    },
    button:{
        marginTop:15,
        backgroundColor: '#69a88d',
        width: '50%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline:{
        color: '#69a88d',
        marginTop: 5,
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    InformationText:{
        color: '#69a88d',
        fontWeight: '700',
        fontSize: 16,
        textAlign : "left",
        alignItems:'center',
        paddingLeft:25,
        paddingRight:15
    },
    title: {
        marginTop:15,
        fontSize:28,
        textAlign: "left",
        paddingBottom:20,
        paddingLeft:25,
        paddingTop:20,
        fontWeight:"bold"
    },
    buttonDefinir: {
        alignItems: "flex-end",
        backgroundColor: '#3e7a6e',
        borderRadius: 10,
        marginLeft: 110,
        textAlign: "center",
        width: '20%',
        color:'white',
        paddingRight: 20
    },
    Niveau: {
        color: '#69a88d',
        fontWeight:"bold",
        textAlign: "center"
    },
    dimension: {
        width: '30%',
        maxWidth: '50%',
        minWidth:'30%',
        alignItems:'center'

    },
    ajustement: { 
        marginLeft: undefined,
        padding: undefined,
        textAlign: undefined,
        width: undefined
    }

})
