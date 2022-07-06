import { StyleSheet, Image, View, Pressable } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from "react"

type Props = { 
  onPress : any
}

const Logo = (props : Props) => {
    return (
        <View>
        <Pressable onPress={props.onPress}>
        <Image
          style={styles.logoStyle}
          source={require("../../../assets/logo.png")}
        />
        </Pressable>
      </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    logoStyle: {
        resizeMode: "contain",
        height: hp ('10%'),
        width: wp ('15%'),
    },
})