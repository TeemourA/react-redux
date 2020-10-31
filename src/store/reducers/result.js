import actionTypes from '../actions/actionsTypes';
import { updateState } from '../utility';

const initialState = {
  results: [],
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
      const updatedResults = state.results.filter(
        (result) => result.id !== action.resultId
      );
      return updateState(...state, { results: updatedResults });
    default:
      return state;
  }
};

export default reducer;
