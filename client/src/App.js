import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/homepage/Home';
import NavBar from './components/navbar/navBar.jsx'
import Footer from './components/footer/Footer.jsx'
import SignUp from './components/auth/SignUp.jsx'
import SignIn from './components/auth/SignIn.jsx'
import './App.scss'
import { Newsfeed } from './components/newsfeed/Newsfeed';
import { Card } from "./components/newsfeed/Card";
import './index.css';


function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <NavBar />

       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/newsfeed" component={Newsfeed} />
         <Route path="/signup" component={SignUp} />
         <Route path="/signin" component={SignIn} />
       </Switch>

      {/* footer */}
      <Footer />
      </div>
    </BrowserRouter>
   
  );
}

export default App;