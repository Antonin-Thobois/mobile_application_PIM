import { signOut } from "firebase/auth";
import { auth } from '../../firebase'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RouteStackParams } from "../navigation/RootStackNavigator";



type Props = {}
const LogOutView = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteStackParams>>();

  const NavToHomePage = () => {
    navigation.navigate("RootDrawerNavigation");
  }

  const LogOutUser = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.')
      NavToHomePage()
    }).catch((error) => {
      console.log(error)
    });
    
  }
  
  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={LogOutUser}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Se déconnecter</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    )

}

export default LogOutView;

const styles = StyleSheet.create({
  container:{
      padding: 16,
      paddingTop: 40,
      backgroundColor:'#ECEBE1',
      flex: 1,  
  },
  
  buttonContainer:{
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40
  },
  button:{
      backgroundColor: '#69a88d',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center'
  },
 
  buttonText:{
      color: 'white',
      fontWeight: '700',
      fontSize: 16
  },
 
})