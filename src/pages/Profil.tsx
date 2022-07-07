import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RouteParams} from "../navigation/RootDrawerNavigator";

type Props = {
}
//const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
const NavToLoginPage = () => {
    //navigation.navigate("PassworChangeView");
}

const Profil = (props: Props) => {
    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [niveau, setNiveau] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <View>
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
                <Text style={[styles.InformationText, styles.ajustement]}>Prénom</Text>
                <Text style={styles.Data}>Océane</Text>
            </View>
            <View style={styles.Align}>
                <Text style={styles.InformationText}>email</Text>
                <Text style={styles.Data}>Email</Text>
            </View>

            <View style={[styles.Align, styles.ajustement]}>
            <TouchableOpacity
                onPress={() => {}}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Valider les modifications</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.Align}>
                <Text style={styles.InformationText}>Mot de passe</Text>
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
                <Text style={styles.InformationText}>Nombre de défis réalisés</Text>
                <Text style={[styles.Data,styles.buttonDefinir]}>14</Text>
            </View>

            <View style={styles.Align}>
                <Text style={styles.InformationText}>Montant reversé</Text>
                <Text style={[styles.Data,styles.buttonDefinir]}>67€</Text>
            </View>

            <View style={styles.Align}>
                <Text style={styles.InformationText}>Montant cagnotté</Text>
                <Text style={[styles.Data,styles.buttonDefinir]}>48€</Text>
            </View>
            <View style={[styles.Align, styles.ajustement]}>
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
        paddingBottom:15,
        justifyContent:'space-between',
        paddingRight:15
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
        fontSize: 16,
        textAlign:"center"
    },
    InformationText:{
        color: '#69a88d',
        fontWeight: '700',
        fontSize: 16,
        paddingLeft:25,
        paddingRight:15,
        width:'auto'
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
        backgroundColor: '#3e7a6e',
        borderRadius: 10,
        textAlign: "center",
        width: '20%',
        color:'white',
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
        alignItems:'center',
        marginLeft:10

    },
    ajustement: {
        paddingRight:0,
        justifyContent:'space-around',
    }

})
