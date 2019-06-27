import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Users from './components/Users'
import Items from './components/Items'
import NavBar from './components/NavBar'


const routing = (
    <Router>
        <NavBar/>
      <div>
        <Route exact path="/" component={App} />
       <Route path="/users" component={Users} />
        <Route path="/items" component={Items} /> 
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
