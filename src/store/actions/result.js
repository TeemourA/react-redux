import actionTypes from './actionsTypes';

export const saveResult = (counter) => ({
  type: actionTypes.STORE_RESULT,
  counter,
});

export const storeResult = (counter) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(counter));
    }, 2000);
  };
};

export const deleteResult = (id) => ({
  type: actionTypes.DELETE_RESULT,
  resultId: id,
});