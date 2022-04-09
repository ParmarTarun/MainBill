import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import Bill from './src/screens/Bill';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Bill" component={Bill} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;
