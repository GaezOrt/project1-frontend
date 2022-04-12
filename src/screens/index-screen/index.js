import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Index = () => {
  return (
    <View>
      <Text style={styles.textColor}>Index</Text>
      <Text>Index</Text>
    </View>
  );
};

export default Index;

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
