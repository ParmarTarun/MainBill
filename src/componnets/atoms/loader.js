import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.loadingWrapper}>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
