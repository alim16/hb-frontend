
//for instructions on how the state management works and the data fetching see below links
//https://www.robinwieruch.de/react-hooks-fetch-data/
//https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c

import React, {  useEffect} from 'react';

//import './users.css';
import  {Table, Button}  from "react-bootstrap";
import {getUsers} from "../axApi";
import { useStateValue } from '../state/state';

function Users () {
  
    const [{usersState, theme}, dispatch] = useStateValue();

    useEffect(() => {
      const fetchData = async () => {
        console.log("inside fetch:",usersState)
        dispatch({ type: 'FETCH_USERS_INIT' });

        try {
          const result = await getUsers()
   
          dispatch({ type: 'FETCH_USERS_SUCCESS', payload: result.data });
       
          
         
        } catch (error) {
          dispatch({ type: 'FETCH_USERS_FAILURE' });
        }
      };
  
      fetchData();
      return
    }, []);
  
 
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
          {console.log("rendering with state", usersState)}
          {usersState.isLoadingUsers ? (<p>isLoading.../</p>)
          :<tbody>
            {usersState.data && usersState.data.map(u =>
                    <tr key={u.id}>
                        <td>{u.first_name}</td>
                        <td>{u.last_name}</td>
                        <td>{u.email}</td>
                    </tr>
                )}
          </tbody>
          }
        </Table>
   
      </div>
    );
}

export default Users
