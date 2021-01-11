import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/homepage/Home';
import NavBar from './components/navbar/navBar.jsx';
import Footer from './components/footer/Footer.jsx';
import SignUp from './components/auth/SignUp.jsx';
import SignIn from './components/auth/signin.jsx';
import { Newsfeed } from './components/newsfeed/Newsfeed';
import './App.scss';
import './index.css';

import { checkAuthState } from './store/actions/loginActions';
import { checkUserState } from './store/actions/userActions';
import { useDispatch } from 'react-redux';
import HelpDetails from './components/profile/HelpDetails.jsx';
import ProfileDetails from './components/profile/ProfileDetails.jsx';

import ForgotPassword from './components/auth/forgot.jsx';
import VerifyEmail from './components/auth/verifyEmail.jsx';

function App() {
	const dispatch = useDispatch();
	dispatch(checkAuthState());
	dispatch(checkUserState());

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
				</Switch>

				{/* footer */}
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
