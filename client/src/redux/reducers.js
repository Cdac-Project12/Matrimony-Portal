import { SET_USER, LOGOUT, SET_LOADING, SET_ERROR, UPDATE_USER } from './actionTypes';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case UPDATE_USER:
      return { ...state, user: action.payload }; // Update user after editing profile
    case LOGOUT:
      return { ...state, user: null };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export default userReducer;
