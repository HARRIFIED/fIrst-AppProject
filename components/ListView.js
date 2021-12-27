import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const ListView = ({item, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={[styles.listItemView, styles.elevation]}>
                <Text style={styles.listItemText}>{item.text}</Text>
                <Icon 
                    name="remove" 
                    size={20} 
                    color="firebrick" 
                    onPress={() => deleteItem(item.id)} 
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 2,
    paddingHorizontal: 10,
    backgroundColor: '#FBF1E8',
    borderColor: '#eee',
    borderBottomWidth: 1,
    borderEndColor: 'white',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15
  },
  listItemView: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 26,
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  listItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ListView;
