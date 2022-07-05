import {
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    View
} from "react-native";
import React, {useState} from "react";

type Props = {
}

const Profil = (props: Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.Align}>
                <Text style={styles.title}>
                    VOTRE PROFIL
                </Text>
                <Text style={styles.InformationText}>Niveau</Text>
                <Text style={styles.Data}>Définir</Text>
            </View>

            <View style={styles.Align}>
                <Text style={styles.InformationText}>Nom</Text>
                <Text style={styles.Data}>LEDOUX</Text>
            </View>
            <View style={styles.Align}>
                <Text style={styles.InformationText}>Prenom</Text>
                <Text style={styles.Data}>Océane</Text>
            </View>
            <View style={styles.Align}>
                <Text style={styles.InformationText}>email</Text>
                <Text style={styles.Data}>Email</Text>
            </View>


            <TouchableOpacity
                onPress={() => {}}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Valider les modifications</Text>
            </TouchableOpacity>

            <View style={styles.Align}>
            <TouchableOpacity
                style={[styles.buttonOutline, styles.Align]}
            >
                <Text style={styles.InformationText}>Mot de passe</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {}}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Modification mot de passe</Text>
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
        paddingBottom:15
    },
    text: {
        fontSize: 20,
        color:'#69a88d'
    },
    input:{
        //backgroundColor:'#69a88d',
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
        marginLeft:90
    },
    button:{
        marginTop:15,
        backgroundColor: '#69a88d',
        width: '70%',
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
    InformationText:{
        color: '#69a88d',
        fontWeight: '700',
        fontSize: 16,
        textAlign : "left",
        paddingLeft:25
    },
    title: {
        marginTop:15,
        fontSize:28,
        textAlign: "left",
        paddingBottom:20,
        paddingLeft:25
    }

})
