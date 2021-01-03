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
      alert('Welcome '+ data.firstName) 
  })
  .catch((error) => {
    dispatch({type: 'Login_Failed', payload:  error.message})
    console.error({
      'Error message': error.message,
      'name' : error.name,
      'stack':error.stack
    })
  });
  }

}

store.dispatch(login)