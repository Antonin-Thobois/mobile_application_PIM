import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import React, {useEffect, useState} from "react";
import { auth, usersCol} from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDocs, getDoc } from '@firebase/firestore'

//const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
const NavToLoginPage = () => {
    //navigation.navigate("PassworChangeView");
}

const Profil = () => {
    const [uid, setUid] = useState('')

    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [niveau, setNiveau] = useState('')
    const [montant, setMontant] = useState('')

    // Enlever pour le profil
    // signInWithEmailAndPassword(auth, "test4@test.com", "testtest")
    //     .then((userCredential) => {
    //         const user = userCredential.user;
    //         console.log(user)
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //     });
    // Enlever la fonction setTimeOut
    // setTimeout(() => {
    //     const user = auth.currentUser;
    //     console.log(user)
    //     // Garder la fonction if pour avoir le uid user
    //     if(user !== null ) {
    //         setUid(user.uid);
    //         setEmail(user.email)
    //     }
    // }, 5000)


    const user = auth.currentUser;
    if(user !== null ) {
        setUid(user.uid);
        // @ts-ignore
        setEmail(user.email)
    }

    // Vérification de l'affichage uid en console
    console.log("Mon ID User " + uid)
    useEffect(() => {
        const getCurrentUser = async () => {
            const userDocRef = doc(usersCol,
                uid)
            console.log(userDocRef)
            const userDoc = await getDoc(userDocRef)
            const userData = userDoc.data()
            if(userData) {
                console.log(userData.prenom)
                setPrenom(userData.prenom)
                setNom(userData.nom)
                setNiveau(userData.niveau)
                setMontant(userData.montant_gagne)
            }
        }
        getCurrentUser()
    })

    /*
            Fonction pour récupérer tous les utilisateurs dans la collection "utilisateurs"
     */
    // const getUser = async () => {
    //     const userDocs = await getDocs(usersCol)
    //     userDocs.docs.forEach((userDoc) => {
    //         const user = userDoc.data()
    //         prenom = user.prenom
    //         nom = user.nom
    //     })
    // }

    return (
        <View style={styles.container}>
            <ScrollView>
            <View>
                <Text style={styles.title}>
                    VOTRE PROFIL
                </Text>
            </View>

            <View style={styles.AlignReverse}>
                <Text style={[styles.Data,styles.buttonDefinir]}>{niveau}</Text>
                <Text style={[styles.InformationText,styles.Niveau]}>Niveau</Text>
            </View>

            <View style={styles.Align}>
                <Text style={styles.InformationText}>Nom</Text>
                <Text style={styles.Data}>{nom}</Text>
            </View>
            <View style={styles.Align}>
                <Text style={[styles.InformationText, styles.ajustement]}>Prénom</Text>
                <Text style={styles.Data}>{prenom}</Text>
            </View>
            <View style={styles.Align}>
                <Text style={styles.InformationText}>email</Text>
                <Text style={styles.Data}>{email}</Text>
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
                <Text style={[styles.Data,styles.buttonDefinir]}>{montant}€</Text>
            </View>
            <View style={[styles.Align, styles.ajustement]}>
            <TouchableOpacity
                onPress={() => {}}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Reverser les gains</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
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
