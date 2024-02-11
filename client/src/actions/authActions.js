// actions/authActions.js
import axios from 'axios';

export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
  }
};

export const logout = () => (dispatch) => {
  // Implement logout logic if needed
  dispatch({ type: 'LOGOUT' });
};
