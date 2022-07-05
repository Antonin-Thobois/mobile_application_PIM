import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../navigation/RootNavigator'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import TopDrawerNavigation from '../Menu/TopDrawerNavigation'

type Props = {}

const Home = (props: Props) => {

    return (
        <View style={styles.container}>
            <TopDrawerNavigation />
            <Text>Home Screen</Text>
            {/* <Button title='Login' onPress={NavToLoginPage}/> */}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        padding: 16,
        marginTop: 24
    }
})