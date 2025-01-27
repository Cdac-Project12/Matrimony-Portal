import axios from 'axios';
import { SET_USER, LOGOUT, SET_LOADING, SET_ERROR } from './actionTypes';

// Define the base URL as a variable
const BASE_URL = 'http://localhost:8080';

// Action creators
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

// Thunk action for login
export const login = (email, password) => async (dispatch) => {
    dispatch(setLoading(true));
  
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, {
        email,
        password,
      });
  
      if (response.data) {
        dispatch(setUser(response.data)); // Store the user data in Redux after login
  
        // Redirect to the dashboard or home page after successful login
        window.location.href = '/dashboard';
      } else {
        dispatch(setError('Login failed! Please check your credentials.'));
      }
    } catch (error) {
      dispatch(setError('An error occurred during login.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

// Thunk action for register
export const register = (firstName, lastName, email, password) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await axios.post(`${BASE_URL}/user/signup`, {
      firstName,
      lastName,
      email,
      password,
    });
console.log(response.data)
    if (response.data) {
      dispatch(setUser(response.data)); 
      window.location.href = '/login';  
    } else {
      dispatch(setError('Registration failed! Please try again.'));
    }
  } catch (error) {
    dispatch(setError('An error occurred during registration.'));
  } finally {
    dispatch(setLoading(false));
  }
};
