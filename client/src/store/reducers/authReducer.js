const initState = {
  isLoggedIn: false
}

const authReducer = (state = initState, action)=> {

  switch(action.type){
    case 'Login_Success':
      return {
        ...state,
        isLoggedIn: true
      }
      default:
        return state
  }
}

export default authReducer