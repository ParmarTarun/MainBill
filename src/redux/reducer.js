import DATA from './constant';

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case DATA.LOAD_SUCCESS:
      return {
        ...state,
        billData: action.billData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
