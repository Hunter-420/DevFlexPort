// reducers/userReducer.js
const initialState = {
    userProfile: null,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USER_SUCCESS':
        return {
          ...state,
          userProfile: action.payload.message,
          error: null,
        };
      case 'UPDATE_USER_FAILURE':
        return {
          ...state,
          userProfile: null,
          error: action.payload.message,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  