import React, { Component } from 'react';
//import { render } from 'react-dom';
//import './users.css';
import  {Table}  from "react-bootstrap";
import {createResource} from 'simple-cache-provider';
import {cache} from './suspense/cache';
import Api from "../api";
import ErrorBoundary from "./suspense/ErrorBoundary";


let UsersResource = createResource(async () => {
   const response = await Api.getUsers();
   const json = await response.json();
   return json;
});

class UsersTable extends Component {
 

  render() {
    let users = UsersResource.read(cache);
    
    return (
      <div className="users">
        <h1> Users list</h1>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u =>
                    <tr key={u.id}>
                        <td>{u.first_name}</td>
                        <td>{u.last_name}</td>
                        <td>{u.email}</td>
                    </tr>
                )}
          </tbody>
        </Table>
      </div>
    );
  }
}

//users with suspense
class Users extends React.Component {
  render() {
      return (
          <ErrorBoundary>
              <React.Suspense fallback={<div>Loading</div>}>
                  <UsersTable/>
              </React.Suspense>
          </ErrorBoundary>
      );
  }
}

export default Users
