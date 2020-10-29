import actionTypes from './actionsTypes';

export const saveResult = (counter) => {
  const updatedCounter = counter * 2;

  return {
    type: actionTypes.STORE_RESULT,
    counter: updatedCounter,
  }
};

export const storeResult = (counter) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      dispatch(saveResult(counter));
    }, 2000);
  };
};

export const deleteResult = (id) => ({
  type: actionTypes.DELETE_RESULT,
  resultId: id,
});