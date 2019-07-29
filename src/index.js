import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Users from './components/Users'
import Items from './components/Items'
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage';

import {StateProvider} from './state/state'
import {usersReducer} from './state/reducers/usersReducer'
import {themeReducer} from './state/reducers/themeReducer'
import {itemsReducer} from './state/reducers/itemsReducer'
import {loginReducer} from './state/reducers/loginReducer'

 function routing () {

  const initialState = {
    theme: { primary: 'green' },
    usersState: {
      isLoadingUsers: false,
      isError: false,
      data: [],
    },
    itemsState: {
      isLoadingItems: false,
      isError: false,
      data: [],
    },
    loginState: {
      email: '',
      password: '',
      submitted: false,
      loading: false,
      error: ''
    }
  };
  
  const combinedReducer = ({ usersState, theme, itemsState, loginState }, action) => ({
    usersState: usersReducer(usersState, action),
    theme: themeReducer(theme, action),
    itemsState: itemsReducer(itemsState, action),
    loginState: loginReducer(loginState, action)
  });

  return (
  <StateProvider initialState={initialState} reducer={combinedReducer}>
      <Router>
          <NavBar/>
        <div>
          <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
          <Route path="/items" component={Items} /> 
          <Route path="/login" component={LoginPage} /> 
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
