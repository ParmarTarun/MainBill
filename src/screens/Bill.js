import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Bill = () => {
  return (
    <View style={styles.screen}>
      <Text>Bills</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
});

export default Bill;
