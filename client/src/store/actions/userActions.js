import store from '../store'

export const checkUserState = () => {
  return function checkAuthStateThunk(dispatch, getState){
    const user = {
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      user_id: JSON.parse(localStorage.getItem('user_id')),
      avatar: localStorage.getItem('avatar'),
    }
    if(user.firstName){
      dispatch({type: 'User_LoggedIn', payload: user})
    }else{
      dispatch({type:'User_LoogedOut'})
    }
  }
}




