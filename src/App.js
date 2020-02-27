import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from '../src/pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import QuoteMaker from './pages/QuoteMaker';


function App() {
  const [user, setUser] = useState(null)

  // Recibe la info del usuario
  // Si esta info es correcta, lo seteo en user
  // Este user lo obtiene los componentes que lo necesiten
  // { user, password }
  const handleLogin = (data) => {
    // Si el usuario es invalido
    if(false) {
      return false
    }

    setUser(data)
  }

  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ () => <Home user={user} /> } />
          <Route exact path="/LogIn" component={ () => <LogIn onLogin={handleLogin} /> } />
          <Route exact path="/Register" component={ Register } />
          <Route exact path="/QuoteMaker" component={ QuoteMaker } />
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