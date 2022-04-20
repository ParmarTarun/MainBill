import React from 'react';
import {Text, StyleSheet, FlatList, StatusBar} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import BillCard from '../molecules/billCard';
import {SafeAreaView} from 'react-native-safe-area-context';

const BillCardsList = ({data}) => {
  const totalTopMargin = useHeaderHeight() + StatusBar.currentHeight;
  return (
    <SafeAreaView style={{...styles.listWrapper,marginTop:totalTopMargin}}>
      <FlatList
        data={data}
        renderItem={BillCard}
        keyExtractor={bill => bill.flat}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    width: '100%',
    padding:15,
  },
});

export default BillCardsList;
