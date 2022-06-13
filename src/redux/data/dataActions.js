
import { REQUEST_DATA,
REQUEST_DATA_SUCCESS,
REQUEST_DATA_FAILED } from '../constant';

export const fetchDataRequest = () => {
  return {
    type: REQUEST_DATA,
  };
};

export const fetchDataSuccess = payload => {
  console.log(payload)
  return {
    type: REQUEST_DATA_SUCCESS,
    payload: payload,
  };
};

export const fetchDataFailed = payload => {
  return {
    type: REQUEST_DATA_FAILED,
    payload: payload,
  };
};
