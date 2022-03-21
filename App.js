import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, RefreshControl} from 'react-native';

const App = () => {

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },
  title: {
    fontSize: 36,
  },
});

export default App;
