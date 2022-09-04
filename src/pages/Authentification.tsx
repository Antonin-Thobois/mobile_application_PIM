import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteStackParams } from '../navigation/RootStackNavigator'

type Props = {}

const Authentification = (props: Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [messError, setMessError] = useState('')

    const navigation = useNavigation<NativeStackNavigationProp<RouteStackParams>>();
    const NavToRegisterPage = () => {
        navigation.navigate("Registration");
    }

    const NavToHomePage = () => {
        navigation.navigate("RootDrawerNavigation");
    }


    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.alert('Content de vous revoir parmis nous !');
            NavToHomePage()
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            const errorMessage = error.message;
            console.log(errorMessage);
            setMessError(errorMessage);
        });

    }
    

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Text>{messError}</Text>
            <View style={styles.inputContainer}>
                <Text
                    style={styles.text}
                >Email</Text>
                <TextInput
                    placeholder='Entrez votre email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <Text
                    style={styles.text}
                >Mot de passe</Text>
                <TextInput
                    placeholder='Entrez votre mot de passe'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={signInUser}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>S'identifier</Text>
                </TouchableOpacity>
                <Text style={styles.buttonOutline}>Créer un compte</Text>
                <TouchableOpacity
                    onPress={NavToRegisterPage}
                    style={styles.buttonOutline}
                >
                    <Text style={styles.buttonOutlineText}>S'enregistrer</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>

    )
}

export default Authentification

const styles = StyleSheet.create({
    container:{
        padding: 16,
        paddingTop: 40,
        backgroundColor:'#ECEBE1',
        flex: 1,  
        alignItems : "center"
    },
    keyboard:{
        alignItems: 'center',
    },
    inputContainer:{
        paddingTop: 40,
        width: '80%'
    },
    text: {
        fontSize: 20,
        color:'#69a88d', 
        fontFamily : 'asap'
    },
    input:{
        opacity: 80,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        fontFamily :'quicksand'
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button:{
        backgroundColor: '#69a88d',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom : 20,
    },
    buttonOutline:{
        color: '#69a88d',
        marginTop: 5,
        fontFamily :'asap'
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        fontFamily :'asap'
    },
    buttonOutlineText:{
        color: '#69a88d',
        fontWeight: '700',
        fontSize: 16,
        textAlign : "center",
        fontFamily :'asap'
    }
})
