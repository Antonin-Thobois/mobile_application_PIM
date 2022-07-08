import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image} from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = wp ('80%') //Math.round(SLIDER_WIDTH * 0.7)

type Props = { 
    item: any
    index : any
  }

const TeamCardItem = (props : Props) => {

  return (
      <View style={styles.container} key={props.index}>
            <Image
              source={props.item.photo}
              style={styles.image}
            />
            <View style={styles.texts}>
              <Text style={styles.firstname}>{props.item.firstname}</Text>
              <Text style={styles.mantraAuthor}>{props.item.mantra} {"\n\n"} {props.item.author}</Text>
            </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection : "row",
    margin : 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor : "#528F7C",
    width: wp ('88%'),
    alignItems : "center",
    flex : 1,
  },
  image: {
    resizeMode: "contain",
    width: wp ('25%'),
    height: hp ('10%'),
  },
  texts: {
    flex : 1,
  },
  header: {
    color: "#69a88d",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
    paddingHorizontal : 10,
  },
  firstname :{
    color: "#3E7A6E",
    fontFamily : 'asap',
    fontWeight: 'bold',
    fontSize : 20,
    paddingTop : 5,
    textAlign : "center",
},
  mantraAuthor: {
    fontSize: 14,
    textAlign : 'justify',
    padding: 10,
    color: "#7A7A7A",
    fontFamily: "quicksand",
  },
})

export default TeamCardItem