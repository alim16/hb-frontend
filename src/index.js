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
import { arrowFunctionExpression } from '@babel/types';



 function routing () {

  const initialState = {
    theme: { primary: 'green' },
    usersState: {
      isLoadingUsers: false,
      isError: false,
      data: [],
    }
  };

  const reducer = (state, action) => {

     switch (action.type) {
       case 'changeTheme':
         console.log("in reducer changing theme:",state)
         return {
           ...state,
           theme: action.newTheme
         };
        case 'FETCH_USERS_INIT':
       return {
         ...state,usersState: {
            ...state.userState,
          isLoadingUsers: true,
          isError: false
         }
       };
      case 'FETCH_USERS_SUCCESS':
       return {
        ...state,usersState: {
           ...state.userState,
         isLoadingUsers: false,
         isError: false,
         data: action.payload
        }
      };
      case 'FETCH_USERS_FAILURE':
       return {
        ...state,usersState: {
           ...state.userState,
         isLoadingUsers: false,
         isError: true
        }
      }
         //might need to throw for default of users reducers
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
