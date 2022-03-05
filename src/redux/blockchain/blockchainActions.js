import {
  CONNECTION_REQUEST,
  CONNECTION_SUCCESS,
  CONNECTION_FAILED,
  UPDATE_ADDRESS,
  RESET,
} from '../constant';

export const connectRequest = () => {
  return {
    type: CONNECTION_REQUEST,
  };
};

export const connectSuccess = (payload) => {
  return {
    type: CONNECTION_SUCCESS,
    payload: payload,
  };
};

export const connectFailed = (payload) => {
  return {
    type: CONNECTION_FAILED,
    payload: payload,
  };
};

export const updateAccountRequest = (payload) => {
  return {
    type: UPDATE_ADDRESS,
    payload: payload,
  };
};

export const resetRequest = () => {
  return {
    type: RESET,
  };
};
