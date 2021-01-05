const initState = {
  isLoggedIn: null,
  loginError: null,
}



const authReducer = (state = initState, action)=> {

  switch(action.type){
    case 'Login_Success':
      return {
        ...state,
        isLoggedIn: true,
        loginError: null
      }
    case 'Login_Failed':
      return {
        ...state,
        isLoggedIn: false,
        loginError: action.payload
      }
    case 'Logged_Out':
      return{
        ...state,
        isLoggedIn: false,
        loginError: null
      }
      default:
        return state
  }
}

export default authReducer