const initialState = {
  firstName: null,
  lastName: null,
  user_id: null,
  avatar: null,
  userLoggedIn: null,
  isProfileComplete: null
}

const userReducer = (state = initialState, action) => {

  switch(action.type){
    case 'User_LoggedIn':
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        user_id: action.payload.user_id,
        avatar: action.payload.avatar,
        userLoggedIn: true
      }
    case 'User_LoogedOut':
      return {
        ...state,
        firstName: null,
        lastName: null,
        user_id: null,
        avatar: null,
        userLoggedIn: null,
        isProfileComplete: null
      }
    case 'Profile_Complete':
      return{
        ...state,
        isProfileComplete: true
      }
    
    default:
      return state
    
  }
} 

export default userReducer