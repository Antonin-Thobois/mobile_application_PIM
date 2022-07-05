import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../navigation/RootNavigator'

type Props = {}

const Home = (props: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

    const NavToLoginPage = () => {
        navigation.navigate("Authentification");
    }

    return (
        <View style = {styles.container}>
            <View>
                <Text>Home Screen</Text>
                <Button title='Login' onPress={NavToLoginPage}/>
            </View>
            <View style = { styles.footer }>
                <Text style = {{ fontSize: 15 }}> Accueil </Text>
                <Text style = {{ fontSize: 15 }}> A propos </Text>
                <Text style = {{ fontSize: 15 }}> Associations </Text>
                <Text style = {{ fontSize: 15 }}> Donateurs </Text>

            </View>
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : "#ECEBE1",
    },

    footer: {
        backgroundColor : '#B0F2B6',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        
    }

})