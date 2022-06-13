import {
  CONNECTION_REQUEST,
  CONNECTION_SUCCESS,
  CONNECTION_FAILED,
  UPDATE_ADDRESS,
  RESET,
} from '../constant';

const initialState = {
  loading: false,
  address: null,
  smartContract: null,
  web3: null,
  provider: null,
  chainId: null,
  error: '',
};

const blockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONNECTION_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: '',
      };
    case CONNECTION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: action.payload.address,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default blockchainReducer;
