

export const login = (credentials) => {
	return function loginThunk(dispatch, getState) {
		const data = credentials;

		fetch('/api/user/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`invalid password or user name!!!`);
				}
				return response.json();
			})
			.then((data) => {
				localStorage.setItem('isLoggedIn', true);
				localStorage.setItem('firstName', data.firstName);
				localStorage.setItem('lastName', data.lastName);
				localStorage.setItem('user_id', JSON.stringify(data.user_id));
				localStorage.setItem('avatar', data.avatar);
				localStorage.setItem('userLoggedIn', 'true');

				dispatch({ type: 'Login_Success' });
				dispatch({ type: 'User_LoggedIn', payload: data });
			})
			.catch((error) => {
				localStorage.clear();
				dispatch({ type: 'Login_Failed', payload: error.message });
				console.error({
					'Error message': error.message,
					'name': error.name,
					'stack': error.stack,
				});
			});
	};
};

export const logOut = () => {
	return function logOutThunk(dispatch, getState) {
		localStorage.clear();
		dispatch({ type: 'Logged_Out' });
		dispatch({ type: 'User_LoogedOut' });

		fetch('/api/user/logout').then(response =>{
			return response.json()
		}

		).then(data=>{
			return data
		})
		
	};
};

export const checkAuthState = () => {
	return function checkAuthStateThunk(dispatch, getState) {
		const isLoggedIn = localStorage.getItem('isLoggedIn');
		if (isLoggedIn) {
			dispatch({ type: 'Login_Success' });
		} else {
			dispatch(logOut());
		}
	};
};
