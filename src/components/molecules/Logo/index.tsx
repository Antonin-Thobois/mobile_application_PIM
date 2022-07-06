import { StyleSheet, Image, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = { 
}

const Logo = (props : Props) => {
    return (
        <View>
        <Image
          style={styles.logoStyle}
          source={require("../../../assets/logo.png")}
        />
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