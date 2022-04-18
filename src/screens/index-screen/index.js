import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  StatusBar,
  FlatList,
  ScrollView,
  View,
  Button,
  Modal,
  Text,
  TextInput
} from 'react-native';
import axios from 'axios';

const Index = () => {
  
  const getData = () => {
    axios.get(`http://10.0.2.2:3000/clients`).then(res => {
      console.log(res.data);
      setListData(res.data);
    });
  };

  const sendInfoNewCharacter = () => {
    const body = {
      character: character,
      movie: movie,
      link:link,
    };
    
    axios.post(`http://10.0.2.2:3000/create-character`,body)
      .then(res => {
        console.log(res.data.error)
        if(res.data.error!=undefined){
          alert(res.data.error)
        }else{
          alert('Client registered succesfully')
        }
      })

  }



  const [listData, setListData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [character, setCharacter] = useState();
  const [movie, setMovie] = useState();
  const [link, setLink] = useState();
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <><><View style={{ jusifyContent: "center", alignItems: "center", marginTop: '40%' }}>
      <ScrollView style={styles.list}>
        <FlatList
          horizontal={true}
          data={listData}
          renderItem={({ item }) => <Image style={styles.tinyLogo}
            source={{
              uri: item.link,
            }} />} />
      </ScrollView>

    </View>
      <View>
        <Button title='Add character' style={styles.addCharButton} onPress={() => setModalVisible(!modalVisible)}></Button>
      </View></>
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View>
      <Text style={styles.title}>Create character</Text>
      <TextInput
      placeholder='Character'
        style={styles.input}
        onChangeText={data => setCharacter(data)}
        value={character}
      />
      <TextInput
      placeholder='Movie'
        style={styles.input}
        onChangeText={data => setMovie(data)}
        value={movie}
      />
      <TextInput
      placeholder='Link'
        style={styles.input}
        onChangeText={data => setLink(data)}
        value={link}
      />
      <View style={styles.buttonLogin}>
        <Button
          onPress={() => sendInfoNewCharacter()}
          title="Create"
          color="#841584"
          
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
     
      
    </View>
          
          </View>
        </View>
      </Modal>
      </View></>
  
  );
};

export default Index;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height:200
  },

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
  title: {
    fontSize: 32,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    borderColor:'violet',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
