const initialState = {
  loading: false,
  name: '',
  totalSupply: 0,
  cost: 0,
  error: false,
  errorMsg: '',
  maxSupply: 6000,
  maxMintAmount: 10,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: '',
      };
    case 'CHECK_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        name: action.payload.name,
        totalSupply: action.payload.totalSupply,
        cost: action.payload.cost,
        maxSupply: action.payload.maxSupply,
        maxMintAmount: action.payload.maxMintAmount,
        error: false,
        errorMsg: '',
      };
    case 'CHECK_DATA_FAILED':
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
