const showHidePassword = () => {
	const getPasswordElement = document.getElementById('password');
	if (getPasswordElement.type === 'password') {
		getPasswordElement.type = 'text';
	} else {
		getPasswordElement.type = 'password';
	}
};

const showHidePassword2 = () => {
	const getPasswordElement = document.getElementById('confirmPassword');
	if (getPasswordElement.type === 'password') {
		getPasswordElement.type = 'text';
	} else {
		getPasswordElement.type = 'password';
	}
};

module.exports = { showHidePassword, showHidePassword2 };
