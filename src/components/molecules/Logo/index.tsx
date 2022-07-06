import { StyleSheet, Image, View } from 'react-native';

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
        minHeight: 60,
        minWidth: 90
    },
})