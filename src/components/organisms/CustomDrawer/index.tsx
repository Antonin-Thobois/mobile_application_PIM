import { View, StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import UserIcon from '../../../icons/UserIcon';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteStackParams } from '../../../navigation/RootStackNavigator';
import { auth } from '../../../../firebase';

type Props = {
    state: any,
    navigation: any,
    descriptors: any,
    user: any
}

const CustomDrawer = (props: Props) => {
    const navigation = useNavigation<StackNavigationProp<RouteStackParams>>()

    const user = auth.currentUser;

    const handleProfil = () => {
        if(user){
            navigation.navigate("Profil");
        }else{
            navigation.navigate("Authentification");
        }
    }
  return (
    <View style={styles.container}>
        <Pressable onPress={handleProfil}>
            <View style={styles.divGene}>
                <View style={styles.divIcon}>
                    <UserIcon size={75} color="#7A7A7A"/>
                </View>
                { user ?
                    <View style={styles.divTitle}>
                        <Text style={styles.title}>Durant Test</Text>
                        <Text style={styles.title}>{user.email}</Text>
                    </View>
                    :
                    <></>
                }
            </View>
        </Pressable>
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
        marginTop: 5,
    },
    divGene: {
        paddingTop: 65,
        paddingBottom: 35,
        alignItems: "center",
        backgroundColor: "#96C0AC"
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