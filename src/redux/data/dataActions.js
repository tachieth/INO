
import { REQUEST_DATA,
REQUEST_DATA_SUCCESS,
REQUEST_DATA_FAILED } from '../constant';

export const fetchDataRequest = () => {
  return {
    type: REQUEST_DATA,
  };
};

export const fetchDataSuccess = payload => {
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

export const fetchData = account => {
  return async dispatch => {
    dispatch(fetchDataRequest());
    try {
      let name = await store
        .getState()
        .blockchain.smartContract.methods.name()
        .call();
      let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();
      let cost = await store
        .getState()
        .blockchain.smartContract.methods.cost()
        .call();
      let maxSupply = await store
        .getState()
        .blockchain.smartContract.methods.maxSupply()
        .call();
      let maxMintAmount= await store
        .getState()
        .blockchain.smartContract.methods.maxMintAmount()
        .call();
      const price = store.getState().blockchain.web3.utils.fromWei(cost, 'ether');
        dispatch(
          fetchDataSuccess({
            name,
            totalSupply,
            cost: price,
            maxSupply,
            maxMintAmount,
          })
        );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed('Could not load data from contract.'));
    }
  };
};
