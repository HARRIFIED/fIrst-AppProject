import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItems = ({addItems}) => {

    const [text, setText] = useState('')
    const onChange = (textValue) => setText(textValue); 

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItems(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> 
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItems;
