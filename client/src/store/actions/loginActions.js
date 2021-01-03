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
    if (response.ok){
      dispatch({type: 'Login_Success'})
      return response.json()
    }else{
      dispatch({type: 'Login_Failed'})
      throw new Error ('Something went wrong status code:',response.status)
    }
})
  .then(data => {
      console.log('user data', data);  
      alert('Welcome '+ data.firstName) 
  })
  .catch((error) => {
    console.error({
      'Error message': error.message,
      'name' : error.name,
      'stack':error.stack
    })
  });
  }

}

store.dispatch(login)