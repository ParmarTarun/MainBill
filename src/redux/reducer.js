import BILL_DATA from "./constant";

const initialState = {
  billData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BILL_DATA.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case BILL_DATA.LOAD_SUCCESS:
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
