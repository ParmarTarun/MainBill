import React, {useEffect} from 'react';
import {View, Pressable, StyleSheet, Text, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../componnets/atoms/loader';
import BillCardsList from '../componnets/organism/billCardsList';
import {requestBillData} from '../redux/action';

const showCurrentBill = () => {
  Linking.openURL('https://bill-251a9.web.app/?bill=true');
};

const Bill = () => {
  const dispatch = useDispatch();
  const {billData, isLoading} = useSelector(state => state);
  useEffect(() => {
    dispatch(requestBillData());
  }, []);
  return (
    <View style={styles.screen}>
      {isLoading && <Loader />}
      <BillCardsList data={billData}/>
      <View>
        <Pressable style={styles.button} onPress={showCurrentBill}>
          <Text style={styles.text}>
            Show Current Bill
            <Icon style={styles.icon} name="external-link" size={24} />
          </Text>
        </Pressable>
      </View>
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
    padding: 10,
  },
});

export default Bill;
