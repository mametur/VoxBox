import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/homepage/Home';

const Hello = () => {
  return  <h1>Hello World</h1>
}

function App() {
  return (
    <BrowserRouter> 
      <div className="App">Navbar
     {/* Navbar */}

       <Switch>
         <Route exact path="/" component={Home} />
       </Switch>

      {/* footer */}
      </div>
    </BrowserRouter>
   
  );
}

export default App;