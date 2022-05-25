import { Text, View, StyleSheet } from 'react-native-web';
import { useState } from 'react';
import { Form, FormItem } from 'react-native-form-component';


const App = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = () => {
      if(email === "test" && password === "test"){
        window.alert("Vous vous êtes authentifier");
      }else{
        window.alert("Authentification incorrect");
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Authentification</Text>
      <Form onButtonPress={handleSubmitForm}>
        <FormItem 
          label="Email"
          isRequired
          value={email}
          onChangeText={(email) => setEmail(email)}
          asterik
        />
        <FormItem 
          label="Password"
          isRequired
          value={password}
          onChangeText={(password) => setPassword(password)}
          asterik
        />
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginBottom: 30,
    fontSize: 30
  }
});

export default App;
