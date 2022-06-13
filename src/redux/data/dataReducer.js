import { REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILED } from '../constant';

const initialState = {
  loading: false,
  totalSupply: 0,
  cost: 0.15,
  error: null,
  maxSupply: 9999,
  maxMintAmount: 5,
  saleActive: false,
  presaleActive: false,
  finalSaleActive: false,
  owner: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REQUEST_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      };
    case REQUEST_DATA_FAILED:
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
