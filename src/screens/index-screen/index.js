import React, {useState, useEffect} from 'react';
import {
  Image,
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
      <FlatList style={styles.list}
        horizontal={true}
        data={listData}
        renderItem={({item}) => <Image style={styles.tinyLogo}
        source={{
          uri: item.link,
        }}/>}
      />
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 250,
    height: 250,
    marginRight:15
  },
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
  list:{
    alignSelf:'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
  },
});
