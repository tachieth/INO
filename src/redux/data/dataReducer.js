const initialState = {
  loading: false,
  totalSupply: 0,
  cost: 0,
  error: null,
  maxSupply: 6000,
  maxMintAmount: 10,
  saleActive: false,
  presaleActive: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'CHECK_DATA_SUCCESS':
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      };
    case 'CHECK_DATA_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
