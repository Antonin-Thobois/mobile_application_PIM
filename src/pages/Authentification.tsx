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
        <View style={styles.container}>
            <View>
                <KeyboardAvoidingView
                    style={styles.keyboard}
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
                        <Text style={styles.buttonOutline}>Have a account?</Text>
                        <TouchableOpacity
                            onPress={handleSignUp}
                            style={styles.buttonOutline}
                        >
                            <Text style={styles.buttonOutlineText}>Register</Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>
            </View>
        </View>
    )
}

export default Authentification

const styles = StyleSheet.create({
    container:{
        padding: 16,
        paddingTop: 40,
        backgroundColor:'#ECEBE1',
        flex: 1,  
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
