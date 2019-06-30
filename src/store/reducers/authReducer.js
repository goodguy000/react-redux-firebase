const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_FAIL':
      console.log('login error');
      return {
        ...state,
        authError: 'login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login sucess');
      return {
        ...state,
        authError: null
      }
    case 'SIGN_OUT_SUCCESS':
        console.log('sign out success');
        return state;
    default:
      return state;
  }
};

export default authReducer;