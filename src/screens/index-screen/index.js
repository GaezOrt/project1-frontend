import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import axios from 'axios';

const Index = () => {
  const getData = () => {
    axios.get(`http://10.0.2.2:3000/clients`).then(res => {
      console.log(res.data);
      setListData(res.data);
    });
  };
  const [listData, setListData] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      <FlatList
        
        data={listData}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
