// actions/userActions.js
import axios from 'axios';

export const updateUser = (userId, userData) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/user/${userId}`, userData);
    dispatch({ type: 'UPDATE_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_USER_FAILURE', payload: error.response.data });
  }
};
