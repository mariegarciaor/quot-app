import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from '../src/pages/Home';
import LogIn from '../src/pages/LogIn';
import Register from './pages/Register';
import QuoteMaker from './pages/QuoteMaker';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/LogIn" component={ LogIn } />
          <Route exact path="/Register" component={ Register } />
          <Route exact path="/QuoteMaker" component={ QuoteMaker } />
          <Route exact path="/ComingSoon" component={ ComingSoon } />
        </Switch>
    </BrowserRouter>
    );
  }  

export default App


/* <div className="App">
        <header className="App-header">
        <img src='#' className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */