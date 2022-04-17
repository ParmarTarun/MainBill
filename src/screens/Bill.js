import React from 'react';
import {View, Pressable, StyleSheet, Text, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const showCurrentBill = () => {
  Linking.openURL('https://bill-251a9.web.app/?bill=true');
};

const Bill = () => {
  return (
    <View style={styles.screen}>
      <Pressable style={styles.button} onPress={showCurrentBill}>
        <Text style={styles.text}>
          Show Current Bill
          <Icon style={styles.icon} name="external-link" size={24} />
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    margin: 20,
    backgroundColor: 'grey',
    width: '80%',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  icon: {
    padding:10
  },
});

export default Bill;
