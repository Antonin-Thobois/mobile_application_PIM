import { Text, View, StyleSheet } from "react-native-web";
import { useEffect, useState } from "react";
import React from "react";
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth"
 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigation = useNavigation();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if(user) {
  //       navigation.replace("Home")
  //     }
  //   })

  //   return unsubscribe
  // }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email,password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:',user.email);
      })
      .catch(error => alert(error.message))
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}/>

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry/>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
  // return (
    
  //   <View style={styles.container}>
  //     <Text style={styles.label}>Authentification</Text>
  //     <Form onButtonPress={handleLogin}>
  //       <FormItem
  //         label="Email"
  //         isRequired
  //         value={email}
  //         onChangeText={(email) => setEmail(email)}
  //         asterik />
  //       <FormItem
  //         label="Password"
  //         isRequired
  //         value={password}
  //         onChangeText={(password) => setPassword(password)}
  //         asterik />
  //     </Form>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginBottom: 30,
    fontSize: 30,
  },

  inputContainer: {
    width: '80%' 
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10, 
    marginTop: 5,
  },
  buttonContainer : {
    width: '60%',
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 40,
  },
  button : {
    backgroundColor: '#0782F9',
    width: '100%',
    paddingHorizontal: 15,
    borderRadius: 10, 
    alignItems: 'center',
  },
  buttonOutline : {
    backgroundColor: 'white', 
    marginTop: 5, 
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText : {
    color: 'white', 
    fontWeight: '700', 
    fontSize: 16,
  },
  buttonOutlineText : {
    color: '#0782F9', 
    fontWeight: '700', 
    fontSize: 16,
  }
});

export default Login;
