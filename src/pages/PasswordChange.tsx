import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../firebase'
import { signOut, updatePassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteStackParams } from '../navigation/RootStackNavigator';

type Props = {}

const PassworChangeView = (props: Props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const user = auth.currentUser;
    const navigation = useNavigation<StackNavigationProp<RouteStackParams>>()

    const handleChangePassword = () => {
        if(user){
            if (oldPassword!==newPassword){
                if(newPassword===confirm){
                    updatePassword(user, newPassword).then(() => {
                        window.alert("Merci d'avoir modifier votre mot de passe");
                        navigation.navigate("RootDrawerNavigation");
                      }).catch((error) => {
                        console.log('erreur', error)
                      });
                }else{
                    console.log('Les deux mots (password et confirm) de passe ne sont pas identiques!')
                }
            }else{
                console.log("L'ancien et le nouveau mot de passe ne peuvent pas etre identiques!")
            }
    
        }else{
            console.log("Connectez vous d'abord!")
        }

    }
    
    

    

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Mot de passe actuel</Text>
                <TextInput
                    placeholder='Tapez votre mot de passe actuel'
                    value={oldPassword}
                    onChangeText={text => setOldPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <Text style={styles.text}>Nouveau mot de passe</Text>
                <TextInput
                    placeholder='Tapez votre mot de passe'
                    value={newPassword}
                    onChangeText={text => setNewPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <Text style={styles.text}>Confirmation de votre nouveau mot de passe</Text>
                <TextInput
                    placeholder='Confirmez votre nouveau mot de passe'
                    value={confirm}
                    onChangeText={text => setConfirm(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => handleChangePassword()}
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
