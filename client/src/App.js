import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/homepage/Home";
import NavBar from "./components/navbar/navBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import SignIn from "./components/auth/signin.jsx";
import { Newsfeed } from './components/newsfeed/Newsfeed';
import ForgotPassword from "./components/auth/forgot.jsx";
import VerifyEmail from "./components/auth/verifyEmail.jsx";

import "./App.scss";
import "./index.css";

import { checkAuthState } from "./store/actions/loginActions";
import { checkUserState } from "./store/actions/userActions";
import { useDispatch } from "react-redux";

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
          <Route path="/forgot" component={ForgotPassword} />
          <Route path="/verify/:token" component={VerifyEmail} />
          <Route path="/update_password" component={VerifyEmail} />
        </Switch>

        {/* footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );

}

export default App;
