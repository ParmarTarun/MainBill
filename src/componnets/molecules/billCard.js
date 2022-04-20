import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BillCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.flat}>{item.flat}</Text>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  flat:{
    fontSize:14,
  },
  name:{
    fontSize:20,
  }
});

export default BillCard;
