import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import UserIcon from '../../../icons/UserIcon';

type Props = {
    state: any,
    navigation: any,
    descriptors: any,
    user: any
}

const CustomDrawer = (props: Props) => {

    console.log(props.user);
  return (
    <View style={styles.container}>
        <View style={styles.divGene}>
            <View style={styles.divIcon}>
                <UserIcon size={75} color="#7A7A7A"/>
            </View>
            { props.user ?
                <View style={styles.divTitle}>
                    <Text style={styles.title}>Durant Test</Text>
                    <Text style={styles.title}>durant.test@gmail.com</Text>
                </View>
                :
                <></>
            }
        </View>
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#ECEBE1"
    },
    drawerContent:{
        marginTop: 75,
    },
    divGene: {
        marginTop: 25,
        padding: 0,
        alignItems: "center"
    },
    divIcon:{
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#7A7A7A",
        alignItems: "center",
        width: "auto",
        padding: 10
    },
    divTitle:{
        width: "auto",
        alignItems: "center",
        marginTop: 10
    },
    title:{
        fontSize: 15,
        color: "#7a7a7a"
    }
})

export default CustomDrawer