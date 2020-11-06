import actionTypes from '../actions/actionsTypes';
import { updateState } from '../utility';

const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  const updatedResults = state.results.filter(
    (result) => result.id !== action.resultId
  );
  return updateState(state, { results: updatedResults });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateState(...state, {
        results: state.results.concat({
          id: new Date(),
          value: action.counter,
        }),
      });
    case actionTypes.DELETE_RESULT:
      deleteResult(state, action);
    default:
      return state;
  }
};

export default reducer;
