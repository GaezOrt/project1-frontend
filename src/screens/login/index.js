import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Alert, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

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
          onPress={() => Alert.alert('Logged in correctly')}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={styles.buttonLogin}>
        <Button
          onPress={() => Alert.alert('Logged in correctly')}
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
