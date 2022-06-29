import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../navigation/RootNavigator'
import { NavBar } from '../components/molecules'

type Props = {}

const Home = (props: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

    const NavToLoginPage = () => {
        navigation.navigate("Authentification");
    }

    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='Login' onPress={NavToLoginPage}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})