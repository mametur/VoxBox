import axios from 'axios'

export const checkUserState = () => {
  return function checkAuthStateThunk(dispatch, getState){
    const user = {
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      user_id: JSON.parse(localStorage.getItem('user_id')),
      avatar: localStorage.getItem('avatar'),
      userLoggedIn: JSON.parse(localStorage.getItem('userLoggedIn'))
    }
    if(user.firstName){
      dispatch({type: 'User_LoggedIn', payload: user})
    }else{
      dispatch({type:'User_LoogedOut'})
    }
  }
}

export const checkProfile = (user_id) => {
  return async function checProfileThunk(dispatch, getState){

    try{
      const res = await axios.get('/api/user/complete/profile/'+user_id)
      if(res.data.status === 200)dispatch({type: 'Profile_Complete'})
      console.log('response', res)
    }catch(error) {
      console.log('error', error)
    }
    
  
}
}



