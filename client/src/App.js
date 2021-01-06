import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/homepage/Home';
import NavBar from './components/navbar/navBar.jsx'
import Footer from './components/footer/Footer.jsx'
import SignUp from './components/auth/SignUp.jsx'
import SignIn from './components/auth/signin.jsx'
import { Newsfeed } from './components/newsfeed/Newsfeed';
import HelpDetails from './components/profile/HelpDetails';
import ProfileDetails from './components/profile/ProfileDetails';

import './App.scss';
import './index.css';


import { checkAuthState } from './store/actions/loginActions'
import { checkUserState } from './store/actions/userActions'
import { useDispatch } from 'react-redux'

function App() {

    const dispatch = useDispatch()
    dispatch(checkAuthState())
    dispatch(checkUserState());


    return ( <
        BrowserRouter >
        <
        div className = "App" >
        <
        NavBar / >

        <
        Switch >
        <
        Route exact path = "/"
        component = { Home }
        /> <
        Route path = "/signup"
        component = { SignUp }
        /> <
        Route path = "/signin"
        component = { SignIn }
        /> <
        Route exact path = "/newsfeed"
        component = { Newsfeed }
        /> <
        Route exact path = "/help/1"
        component = { HelpDetails }
        />  <
        Route exact path = "/help/1"
        component = { HelpDetails }
        /> 

        <
        Route exact path = "/profile/1"
        component = { ProfileDetails }
        /> 

        <
        /
        Switch >

        { /* footer */ } <
        Footer / >
        <
        /div> < /
        BrowserRouter >
    );
}

export default App;