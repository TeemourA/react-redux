import actionTypes from '../actions/actions';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return { ...state, results: state.results.concat({ id: new Date(), value: action.counter }) }
    case actionTypes.DELETE_RESULT:
      const updatedResults = state.results.filter(result => result.id !== action.resultId);
      return { ...state, results: updatedResults }
    default:
      return state;
  }
};

export default reducer;