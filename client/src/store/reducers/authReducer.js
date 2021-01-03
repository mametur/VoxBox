const initState = {
  isLoggedIn: null
}

const authReducer = (state = initState, action)=> {

  switch(action.type){
    case 'Login_Success':
      return {
        ...state,
        isLoggedIn: true
      }
    case 'Login_Failed':
      return {
        ...state,
        isLoggedIn: false
      }
    case 'Logged_Out':
      return{
        ...state,
        isLoggedIn: false
      }
      default:
        return state
  }
}

export default authReducer