import axios from 'axios';
import BILL_DATA from './constant';

const requestBillData = () => async dispatch => {
  dispatch({
    type: BILL_DATA.LOAD,
  });
  try {
    const json = await axios.get(
      'https://bill-251a9-default-rtdb.firebaseio.com/billsData.json',
    );
    dispatch({
      type: BILL_DATA.LOAD_SUCCESS,
      billData: json.data.data,
      isError: false,
    });
  } catch (e) {
    console.log('Error fetching bill data: ' + e);
    dispatch({
      type: BILL_DATA.LOAD_SUCCESS,
      billData: [],
      isError: true,
    });
  }
};

export {requestBillData};
