import { View, Text, Image, FlatList, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import TopDrawerNavigation from '../Menu/TopDrawerNavigation'
import data from '../components/molecules/DataMembers'
import TeamCardItem from '../components/molecules/TeamCardItem'
import { color } from 'react-native-reanimated'

const TextBold = (props: any) => <Text style={{fontWeight: '800', color:"#528F7C"}}>{props.name}</Text>
const TextItalic = (props: any) => <Text style={{fontStyle: 'italic', color:"#69A88D"}}>{props.name}</Text>

const Team = () => {
  return (
    <View style={styles.container}>
      <TopDrawerNavigation/>
      <FlatList
      ListHeaderComponent={
        <>
        <Text style={styles.titreStyle}>Pourquoi ce projet</Text>
        <Text style={styles.corpsStyle}>
          L’environnement et l’écologie sont au cœur des préoccupations des Français. Mais les actions concrètes sont parfois rares.{"\n"}
          <TextBold name="NaturaDéfi vous propose de prendre part à l'aventure environnementale !"/>{"\n"}
          Les <TextItalic name="financeurs"/> (industriels, sponsors…) participent au concept en alimentant une cagnotte.{"\n"}
          Les défis sont réalisés par vous : les <TextItalic name="challengeurs"/>. Chaque défi réalisé permet de créditer une somme sur une cagnotte qui sera reversée à une association environnementale ou un projet environnemental de votre choix.{"\n"}
          Les <TextItalic name="bénéficiaires"/> engagent des projets liés à l’environnement grâce aux sommes récoltées via les défis réalisés.{"\n"}
          <TextBold name="Le cercle vertueux pour agir au mieux pour notre planète est lancé !"/>
        </Text>
        </>}
          data={data}
          renderItem={TeamCardItem}
      />

    </View>
  )
}

export default Team

const styles = StyleSheet.create({
  container:{
    padding: 16,
    paddingTop: 40,
    flex: 1,
    backgroundColor : "#ECEBE1",
  },
  titreStyle:{
    color: "#3E7A6E",
    fontFamily : 'asap',
    fontWeight: 'bold',
    fontSize : 20,
  },
  corpsStyle:{
    color: "#7A7A7A",
    fontFamily: "quicksand",
    textAlign : 'justify',
    padding :5,
},
})