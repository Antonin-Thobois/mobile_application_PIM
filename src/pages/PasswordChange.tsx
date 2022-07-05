import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

type Props = {}

const PassworChangeView = (props: Props) => {
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [password3, setPassword3] = useState('')

    

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View>
                <Text style={styles.text1}>Modification Mot de Passe</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Mot de passe actuel</Text>
                <TextInput
                    placeholder='Tapez votre mot de passe actuel'
                    value={password1}
                    onChangeText={text => setPassword1(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <Text style={styles.text}>Nouveau mot de passe</Text>
                <TextInput
                    placeholder='Tapez votre mot de passe'
                    value={password2}
                    onChangeText={text => setPassword2(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <Text style={styles.text}>Confirmation de votre nouveau mot de passe</Text>
                <TextInput
                    placeholder='Confirmez votre nouveau mot de passe'
                    value={password3}
                    onChangeText={text => setPassword3(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Modifier le mot de passe</Text>
                </TouchableOpacity>
            </View>       
        </KeyboardAvoidingView>
    )
}

export default PassworChangeView;

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
        marginLeft: -250

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
