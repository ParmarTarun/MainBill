import DATA from './constant';

const requestData = () => async dispatch => {
  dispatch({
    type: DATA.LOAD,
  });
  try {
    setTimeout(
      () =>
        dispatch({
          type: DATA.LOAD_SUCCESS,
          data: ['hello', 'world'],
          isError: false,
        }),
      2000,
    );
  } catch (e) {
    dispatch({
      type: DATA.LOAD_SUCCESS,
      data: [],
      isError: true,
    });
  }
};

export {requestData};
