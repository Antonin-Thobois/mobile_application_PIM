import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Pressable, Linking } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = wp ('80%') //Math.round(SLIDER_WIDTH * 0.7)

type Props = { 
    item: any
    index : any
  }

const CarouselCardItem = (props : Props) => {

  return (
    <View style={styles.container} key={props.index}>
      <Image
        source={{ uri: props.item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.header}>{props.item.title}</Text>
      <Text style={styles.body}>{props.item.body}</Text>
        <Pressable style = {styles.buttonStyle}>
            <Text style = {styles.buttonTitreStyle} onPress={() => Linking.openURL(props.item.site)}>Site de l'Association</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop : 20,
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

export default CarouselCardItem