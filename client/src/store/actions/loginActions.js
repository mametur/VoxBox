import store from '../store'


export const login = (credentials) => {
  return function loginThunk (dispatch, getState){

    const data = credentials

    fetch('/api/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(response =>{    
    if (!response.ok){
      console.log('response', response)
      throw new Error (`invalid password or user name!!!`)
    }
    return response.json()
})
  .then(data => {
      console.log('user data', data);
      dispatch({type: 'Login_Success'})
      dispatch({type: 'User_LoggedIn', payload: data})
      localStorage.setItem('isLoggedIn', true)
      localStorage.setItem('firstName', data.firstName)  
      localStorage.setItem('lastName', data.lastName)  
      localStorage.setItem('user_id', JSON.stringify(data.user_id))  
      localStorage.setItem('avatar', data.avatar)  

      alert('Welcome '+ data.firstName) 
  })
  .catch((error) => {
    dispatch({type: 'Login_Failed', payload:  error.message})
    localStorage.clear()
    console.error({
      'Error message': error.message,
      'name' : error.name,
      'stack':error.stack
    })
  });
  }

}

export const logOut = () => {
  return function logOutThunk(dispatch, getState){
      localStorage.clear();
      dispatch({ type: 'Logged_Out'})
      dispatch({type: 'User_LoogedOut'})
  }
}

export const checkAuthState = () => {
  return function checkAuthStateThunk(dispatch, getState){
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if(isLoggedIn){
      dispatch({type: 'Login_Success'})
    }else{
      dispatch(logOut())
    }
  }
}

store.dispatch(checkAuthState)
store.dispatch(logOut)
store.dispatch(login)