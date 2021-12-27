import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.Header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Header:{
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text:{
    color: 'white',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export default Header;
