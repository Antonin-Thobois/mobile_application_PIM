import { View, StyleSheet, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerNavigationProp } from '@react-navigation/drawer';
import UserIcon from '../../../icons/UserIcon';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteStackParams } from '../../../navigation/RootStackNavigator';
import { auth, usersCol } from '../../../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import DoorIcon from '../../../icons/DoorIcon';
import { signOut } from 'firebase/auth';
import { RouteParams } from '../../../navigation/RootDrawerNavigator';

type Props = {
    state: any,
    navigation: any,
    descriptors: any
}

const CustomDrawer = (props: Props) => {
    const navigation = useNavigation<StackNavigationProp<RouteStackParams>>()
    const navigationDrawer = useNavigation<DrawerNavigationProp<RouteParams>>()
    
    let user = auth.currentUser;

    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        const getCurrentUser = () => {
            setTimeout(async () => {
                user = auth.currentUser;
                if(user !== null) {
                    if(user.email){
                        setEmail(user.email);
                    }
                    const userDocRef = doc(usersCol, user.uid)
                    const userDoc = await getDoc(userDocRef)
                    const userData = userDoc.data()
                    if(userData) {
                        setPrenom(userData.prenom)
                        setNom(userData.nom)
                    }
                }
            }, 1000);
            
        }

        getCurrentUser()
    }, [])

    const handleProfil = () => {
        if(user){
            navigation.navigate("Profil");
        }else{
            navigation.navigate("Authentification");
        }
    }

    const handleDeco = () => {
        signOut(auth);
        navigationDrawer.closeDrawer;
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
                        <Text style={styles.title}>{nom} {prenom}</Text>
                        <Text style={styles.title}>{email}</Text>
                    </View>
                    :
                    <></>
                }
            </View>
        </Pressable>
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
            <DrawerItemList {...props}/>
            { user ? 
            <View style={styles.divDeco}>
                <Pressable style={styles.deco} onPress={handleDeco}>
                    <DoorIcon size={22} color={"#7a7a7a"} />
                    <Text style={styles.decoText}>Déconnexion</Text>
                </Pressable>
            </View>
            :
            <></>
            }
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
    },
    divDeco:{
        alignItems: "center",
        width: "auto",
        marginTop: 5 
    },
    deco:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#96C0AC",
        width: "93%",
        borderRadius: 5,
        padding: 10
    },
    decoText:{
        marginLeft: 15,
        fontSize: 15,
        fontWeight: "bold",
        color: "#7a7a7a"
    }
})

export default CustomDrawer