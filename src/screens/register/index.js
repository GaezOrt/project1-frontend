import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Register = () => {
  return (
    <View>
      <Text style={styles.textColor}>Register</Text>
      <Text>Register</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  textColor: {
    color: 'red',
    fontSize: 50,
  },
});
