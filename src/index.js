import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Users from './components/Users'
import Items from './components/Items'
import NavBar from './components/NavBar'

import {StateProvider} from './state/state'

 function routing () {
  const initialState = {
    theme: { primary: 'green' },
    "users2": [
      {
        "id": 1,
        "first_name": "Sebastian",
        "last_name": "Eschweiler",
        "email": "sebastian@codingthesmartway.com"
      },
      {
        "id": 2,
        "first_name": "Steve",
        "last_name": "Palmer",
        "email": ""
      },
      {
        "id": 3,
        "first_name": "Ann",
        "last_name": "Smith",
        "email": "ann@codingthesmartway.com"
      }
    ]
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          theme: action.newTheme
        };
        
      default:
        return state;
    }
  };

  return (
  <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
          <NavBar/>
        <div>
          <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
          <Route path="/items" component={Items} /> 
        </div>
      </Router>
  </StateProvider>

  )

}


ReactDOM.render(routing(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
