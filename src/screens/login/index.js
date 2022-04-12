import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Alert, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const sendInfoRegister = () => {
    const body = {
      username: username,
      password: password,
    };
    
    axios.post(`http://10.0.2.2:3000/register`,body)
      .then(res => {
        console.log(res.data.error)
        if(res.data.error!=undefined){
          Alert.alert(res.data.error)
        }else{
          Alert.alert('Client registered succesfully')
        }
      })

  }

  const sendInfoLogin = () => {
    const body = {
      username: username,
      password: password,
    };
    
    axios.post(`http://10.0.2.2:3000/login`,body)
      .then(res => {
        console.log(res.data.error)
        if(res.data.error!=undefined){
          Alert.alert(res.data.error)
        }else{
          Alert.alert('Logged in succesfully')
          navigation.navigate('index');
        }
      })

  }



  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={data => setUsername(data)}
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={data => setPassword(data)}
        value={password}
      />
      <View style={styles.buttonLogin}>
        <Button
          onPress={() => sendInfoLogin()}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={styles.buttonLogin}>
        <Button
          onPress={() => sendInfoRegister()}
          title="Register"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  buttonLogin: {
    marginBottom: 15,
    marginTop: 10,
    alignSelf: 'center',
  },
  title: {
    color: 'black',
    fontSize: 50,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
