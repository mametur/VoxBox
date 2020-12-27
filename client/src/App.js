import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/homepage/Home';
import NavBar from './components/navbar/navBar.jsx'
import Footer from './footer/Footer'
import './App.scss'

const Hello = () => {
  return  <h1>Hello World</h1>
}

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <NavBar />

       <Switch>
         <Route exact path="/" component={Home} />
       </Switch>

      {/* footer */}
      <Footer />
      </div>
    </BrowserRouter>
   
  );
}

export default App;