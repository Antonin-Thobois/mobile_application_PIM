 import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'


import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../navigation/RootNavigator'
type Props = {}

const Authentification = (props: Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
    const NavToRegisterPage = () => {
        navigation.navigate("Registration");
    }

    const NavToHomePage = () => {
        navigation.navigate("Home");
    }


    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Bienvenue')
            const user = userCredential.user;
            //console.log(user)
            NavToHomePage()
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    


    }
    

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <Text
                    style={styles.text}
                >Email</Text>
                <TextInput
                    placeholder='Your email address'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <Text
                    style={styles.text}
                >Password</Text>
                <TextInput
                    placeholder='Your password'
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
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <br/> <br/>
                <Text style={styles.buttonOutline}>Have a account?</Text>
                <TouchableOpacity
                    onPress={NavToRegisterPage}
                    style={styles.buttonOutline}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default Authentification

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ECEBE1',
        flex: 1,
        alignItems: 'center',
    },
    inputContainer:{
        paddingTop: 40,
        width: '80%'
    },
    text: {
        fontSize: 20,
        color:'#69a88d'
    },
    input:{
        //backgroundColor:'#69a88d',
        opacity: 80,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
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
