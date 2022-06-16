import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

type Props = {}

const Authentification = (props: Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((re) => {
            console.log(re);
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
                <TextInput 
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Password'
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
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer:{
        width: '80%'
    },
    input:{
        backgroundColor: 'white',
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
        backgroundColor: 'green',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline:{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: 'green',
        borderWidth: 2
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutlineText:{
        color: 'green',
        fontWeight: '700',
        fontSize: 16
    },
})