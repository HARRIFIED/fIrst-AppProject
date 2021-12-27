import React, {useState} from 'react';
import {View, FlatList, Alert, StyleSheet} from 'react-native';
import Header from './components/Header';
import ListView from './components/ListView';
import AddItems from './components/AddItems';

const App = () => {
  const renderItem = ({item}) => (
    <ListView item={item} key={item.id} deleteItem={deleteItem} />
  );

  const deleteItem = id => {
    setItems(prevItem => {
      return prevItem.filter(item => item.id !== id);
    });
  };

  const addItems = text => {
    if (!text) {
      Alert.alert('Error', 'field cannot be empty', [
        {
          text: 'OK',
          
        },
      ]);
    } else {
      setItems(prevItem => {
        return [{id: Math.random(), text}, ...prevItem];
      });
    }
  };

  const [items, setItems] = useState([
    {
      id: Math.random(),
      text: 'Milk',
    },
    {
      id: Math.random(),
      text: 'Eggs',
    },
    {
      id: Math.random(),
      text: 'Bread',
    },
    {
      id: Math.random(),
      text: 'Juice',
    },
  ]);

  return (
    <View style={styles.container}>
      <Header title="Shop@Harris" />
      <AddItems addItems={addItems} />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
