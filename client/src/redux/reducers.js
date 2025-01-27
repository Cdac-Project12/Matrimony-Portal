// reducers.js
import { SET_USER, LOGOUT, SET_LOADING, SET_ERROR } from './actionTypes';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Reducer to handle actions
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload, loading: false, error: null };
    case LOGOUT:
      return { ...state, user: null };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default rootReducer;
