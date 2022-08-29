import { TouchableOpacity, View, StyleSheet, Text, Image, Pressable, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, donorCol, usersCol } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteStackParams } from '../navigation/RootStackNavigator';
import { doc, getDoc, getDocs } from 'firebase/firestore';
import { ITEM_WIDTH } from '../components/molecules/CarouselCardItem';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

const Donate = () => {
  const navigation = useNavigation<StackNavigationProp<RouteStackParams>>()
  const user = auth.currentUser;
  const [listDonor, setListDonor] = useState([{
    id: 0, nom: "", description: "", logoUrl: "", siteUrl: ""
  }]);
  const [uid, setUid] = useState("");
  const [don, setDon] = useState("");
  const [selected, setSelected] = useState(0);

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
      
      let donorList: { id: number, nom: any; description: any; logoUrl: any; siteUrl: any; }[] = [];
      const donorDocs = await getDocs(donorCol)
      let i = 0
      donorDocs.docs.forEach((donorDoc) => {
        i++;
        const donor = donorDoc.data()
        let donortmp = {
          id: i,
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

  const handleRadio = (e: any) => {
    setSelected(e)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      {
        listDonor.map(e => {
          return(
            <>
            <View style={styles.divDonor} key={e.id}>
              <TouchableOpacity testID={e.id.toString()} onPress={() => {handleRadio(e.id)}}>
                <View style={{
                  height: 24,
                  width: 24,
                  borderRadius: 12,
                  borderWidth: 2,
                  borderColor: '#000',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {
                    e.id == selected ?
                      <View style={{
                        height: 12,
                        width: 12,
                        borderRadius: 6,
                        backgroundColor: '#000',
                      }} />
                      : null
                  }
                </View>
              </TouchableOpacity>
              <Text style={styles.titleDonor}>{e.nom}</Text>
            </View>
            {
              e.id == selected ?
              <View>
                <View style={styles.cardContainer} key={e.id}>
                  <Image
                    source={{ uri: e.logoUrl }}
                    style={styles.image}
                  />
                  <Text style={styles.header}>{e.nom}</Text>
                  <Text style={styles.body}>{e.description}</Text>
                    <Pressable style = {styles.buttonStyle}>
                        <Text style = {styles.buttonTitreStyle} onPress={() => Linking.openURL(e.siteUrl)}>Site de l'Association</Text>
                    </Pressable>
                </View>
              </View>
              :
              <></>
            }
            </>
          )
        })
      }
      </ScrollView>
    </View>
  )
}

export default Donate

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ECEBE1',
    display:"flex",
    flex: 1,
  },
  divDonor:{
    flexDirection: "row",
    margin: 15
  },
  titleDonor:{
    marginLeft: 5
  },
  cardContainer: {
    marginTop : 15,
    margin: 20,
    backgroundColor: '#ECEBE1',
    borderRightWidth : 2,
    borderLeftWidth : 2,
    borderBottomWidth : 2,
    borderColor : "#528f7c",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    alignItems : "center",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    resizeMode: "contain",
    backgroundColor: 'white',
    borderColor : "#528f7c",
    borderWidth : 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: ITEM_WIDTH,
    height: hp ('20%'),
  },
  header: {
    color: "#69a88d",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
    paddingHorizontal : 10,
  },
  body: {
    color: "#222",
    fontSize: 14,
    textAlign : 'justify',
    padding: 20
  },
  buttonStyle:{
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: '#528F7C',
    color: "#62A188",
    width: wp ('50%'),
  },
    buttonTitreStyle:{
    color: "#ECEBE1",
    fontFamily : 'helvetica',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize : 14,
},
})