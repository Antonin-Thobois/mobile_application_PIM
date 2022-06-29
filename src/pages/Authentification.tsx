 import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth, usersCol } from '../../firebase'
import { doc, setDoc } from '@firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'

type Props = {}

const Authentification = (props: Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (response) => {
            console.log(response);
            const userRef = doc(usersCol, response.user.uid)
            await setDoc(userRef, {
                montant_gagne: 0,
                niveau: 0,
                nom: "test",
                prenom: "test"
            })
        })
        .catch((re) => {
            console.log(re);
        })
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
                    onPress={() => {}}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <br/> <br/>
                <Text style={styles.buttonOutline}>Have a account?</Text>
                <TouchableOpacity
                    onPress={handleSignUp}
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
<<<<<<< Updated upstream
        backgroundColor:'#ECEBE1',
=======
        backgroundColor: "#ECEBE1",
>>>>>>> Stashed changes
        flex: 1,
        alignItems: 'center',
    },
    inputContainer:{
<<<<<<< Updated upstream
        paddingTop: 40,
=======
        padding: "50px",
>>>>>>> Stashed changes
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
