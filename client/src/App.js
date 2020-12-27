import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/homepage/Home';
import NavBar from './components/navbar/navBar.jsx'
import Footer from './footer/Footer'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Footer/>
      </div>
    );
  }
}

export default App;