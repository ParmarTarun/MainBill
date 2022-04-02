import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = () => {
  return (
    <View style={styles.body}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
