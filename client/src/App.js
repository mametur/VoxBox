import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/homepage/Home';
import NavBar from './components/navbar/navBar.jsx';
import Footer from './components/footer/Footer.jsx';
import SignUp from './components/auth/SignUp.jsx';
import SignIn from './components/auth/signin.jsx';
import { Newsfeed } from './components/newsfeed/Newsfeed';
import { SessionExp } from './components/auth/tokenExp.jsx';
import './App.scss';
import './index.css';
import 'normalize.css';

import { checkAuthState } from './store/actions/loginActions';
import { checkUserState, checkProfile } from './store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import HelpDetails from './components/profile/HelpDetails.jsx';
import ProfileDetails from './components/profile/ProfileDetails.jsx';

import ForgotPassword from './components/auth/forgot.jsx';
import VerifyEmail from './components/auth/verifyEmail.jsx';

function App() {
	const user_id = useSelector((state) => state.user.user_id);
	const dispatch = useDispatch();
	dispatch(checkAuthState());
	dispatch(checkUserState());
	if (user_id) dispatch(checkProfile(user_id));

	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/signup" component={SignUp} />
					<Route path="/signin" component={SignIn} />
					<Route exact path="/newsfeed" component={Newsfeed} />
					<Route exact path="/help/:id" component={HelpDetails} />
					<Route exact path="/profile/:id" component={ProfileDetails} />
					<Route path="/forgot" component={ForgotPassword} />
					<Route path="/verify" component={VerifyEmail} />
					<Route path="/update_password" component={VerifyEmail} />
					<Route path="/session_expired" component={SessionExp} />
				</Switch>

				{/* footer */}
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
