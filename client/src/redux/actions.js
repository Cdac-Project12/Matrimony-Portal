import axios from 'axios';
import { SET_USER, LOGOUT, SET_LOADING, SET_ERROR, UPDATE_USER, SAVE_PREFERENCES } from './actionTypes';

const BASE_URL = 'http://localhost:8080'; // Your backend API URL

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
export const login = (email, password, navigate) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await axios.post(`${BASE_URL}/user/login`, {
      email,
      password,
    });

    if (response.data) {
      dispatch(setUser(response.data)); // Store user in Redux state
      navigate('/dashboard'); // Navigate to the dashboard
    } else {
      dispatch(setError('Login failed! Invalid credentials.'));
    }
  } catch (error) {
    dispatch(setError('An error occurred during login.'));
  }
};

// Thunk action for registering a new user
export const register = (userData) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(null)); // Clear any previous errors

  try {
    const response = await axios.post(
      `${BASE_URL}/user/signup`,
      JSON.stringify(userData), // Convert the data to JSON string
      {
        headers: {
          'Content-Type': 'application/json', // Explicitly set the content type
        },
      }
    );

    if (response.data) {
      window.location.href = '/login'; // Redirect to login page
    } else {
      dispatch(setError('Registration failed! Please try again.'));
    }
  } catch (error) {
    dispatch(setError(error.response?.data?.message || 'Registration failed due to a server issue.'));
  } finally {
    dispatch(setLoading(false));
  }
};

// Thunk action to get user details
export const getUserDetails = (userId) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await axios.get(`${BASE_URL}/user/details/${userId}`);

    if (response.data) {
      dispatch(setUser(response.data)); // Update the user in Redux state
    } else {
      dispatch(setError('Failed to fetch user details.'));
    }
  } catch (error) {
    dispatch(setError('An error occurred while fetching user details.'));
  } finally {
    dispatch(setLoading(false));
  }
};

// Thunk action to update user details
export const updateUser = (userData) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await axios.put(`${BASE_URL}/user/update`, userData);

    if (response.data) {
      dispatch({
        type: UPDATE_USER,
        payload: response.data, // Update the user data in Redux store
      });
      return response.data; // Return updated user data
    }
  } catch (error) {
    dispatch(setError('Failed to update user information.'));
  } finally {
    dispatch(setLoading(false));
  }
};


export const savePreferences = (userId, preferences) => async (dispatch) => {
  dispatch(setLoading(true));
console.log(preferences)
  try {
    // const token = localStorage.getItem('authToken');
    const response = await axios.post(`${BASE_URL}/users/preferences/save/${userId}`, preferences);

    if (response.data) {
      dispatch({
        type: SAVE_PREFERENCES,
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch(setError('Failed to save preferences.'));
  } finally {
    dispatch(setLoading(false));
  }
};