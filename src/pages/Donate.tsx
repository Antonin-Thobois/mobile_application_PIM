import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, donorCol, usersCol } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteStackParams } from '../navigation/RootStackNavigator';
import { doc, getDoc, getDocs } from 'firebase/firestore';

const Donate = () => {
  const navigation = useNavigation<StackNavigationProp<RouteStackParams>>()
  const user = auth.currentUser;
  const [listDonor, setListDonor] = useState([{}]);
  const [uid, setUid] = useState("");
  const [don, setDon] = useState("");

  /* if(!user){
    window.alert("Veuillez vous reconnecter.");
    navigation.navigate("Authentification");
  }else{
    setUid(user.uid);
  } */

  useEffect(() => {
    const getAllThing = async () => {
      /* const userDocRef = doc(usersCol, uid)
      const userDoc = await getDoc(userDocRef)
      const userData = userDoc.data()
      if(userData) {
        setDon(userData.montant_gagne)
      } */
      
      let donorList: { nom: any; description: any; logoUrl: any; siteUrl: any; }[] = [];
      const donorDocs = await getDocs(donorCol)
      donorDocs.docs.forEach((donorDoc) => {
        const donor = donorDoc.data()
        let donortmp = {
          nom: donor.nom,
          description: donor.description,
          logoUrl: donor.logoUrl,
          siteUrl: donor.siteUrl
        }
        donorList.push(donortmp);
      })
      setListDonor(donorList);
    }
    getAllThing()
  }, [])

  return (
    <View>
      {
        listDonor.map(() => {
          
        })
      }
    </View>
  )
}

export default Donate