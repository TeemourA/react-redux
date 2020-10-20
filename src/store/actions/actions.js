const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  STORE_RESULT: 'STORE_RESULT',
  DELETE_RESULT: 'DELETE_RESULT',
};

export const increment = () => ({
  type: actionTypes.INCREMENT,
});

export const decrement = () => ({
  type: actionTypes.DECREMENT,
});

export const add = (value) => ({
  type: actionTypes.ADD,
  value,
});

export const subtract = (value) => ({
  type: actionTypes.SUBTRACT,
  value,
});

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

export default actionTypes;