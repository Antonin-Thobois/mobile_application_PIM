import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    StatusBar,
    SafeAreaView
 } from 'react-native';

 
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../navigation/RootNavigator'
import { auth, usersCol } from '../../firebase'
import { doc, setDoc } from '@firebase/firestore'
import { createUserWithEmailAndPassword,  } from 'firebase/auth'
type Props = {}





const RegistrationView = (props: Props) => {
    const [name, setName] = useState('')
    const [firstname, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    
    
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
    const NavToLoginPage = () => {
        navigation.navigate("Authentification");
    }
    const createUserData = () => {
        if (password1==password2) {
            createUserWithEmailAndPassword(auth, email, password1)
            .then(async (response) => {
                console.log(response);
                const userRef = doc(usersCol, response.user.uid)

                await setDoc(userRef, {
                    montant_gagne: 0,
                    niveau: 0,
                    nom: name,
                    prenom: firstname,
                })
                NavToLoginPage()
                
            })
            .catch((re) => {
                console.log(re);
            })
        }else {
            console.log("Les deux passwords ne sont pas identiques!")
        }
     }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View>
                <Text style={styles.text1}>Création de profil</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Nom</Text>
                <TextInput
                    placeholder='Indiquez votre nom'
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>Prenom</Text>
                <TextInput
                    placeholder='Indiquez votre prénom'
                    value={firstname}
                    onChangeText={text => setFirstName(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>Email</Text>
                <TextInput
                    placeholder='Indiquez votre email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>Mot de passe</Text>
                <TextInput
                    placeholder='Tapez un mot de passe'
                    value={password1}
                    onChangeText={text => setPassword1(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <Text style={styles.text}>Confirmation de votre nouveau mot de passe</Text>
                <TextInput
                    placeholder='Confirmer votre mot de passe'
                    value={password2}
                    onChangeText={text => setPassword2(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => createUserData()}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Création du profil</Text>
                </TouchableOpacity>
            </View>       
        </KeyboardAvoidingView>
    )
}

export default RegistrationView;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ECEBE1',
        flex: 2,
        alignItems: 'center',
    },
    inputContainer:{
        paddingTop: 40,
        width: '80%'
    },
    text1: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: -300

    },
   
    text: {
        fontSize: 20,
        color:'#69a88d'
    },
    input:{
        opacity: 80,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer:{
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button:{
        backgroundColor: '#69a88d',
        width: '100%',
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
    buttonOutlineText:{
        color: '#69a88d',
        fontWeight: '700',
        fontSize: 16,
        textAlign : "center"
    },
    
    
})
