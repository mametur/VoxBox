import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

const Hello = () => {
  return  <h1>Hello World</h1>
}

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
     {/* Navbar */}

       <Switch>
         <Route exact path="/" component={Hello} />
       </Switch>

      {/* footer */}
      </div>
    </BrowserRouter>
   
  );
}

export default App;