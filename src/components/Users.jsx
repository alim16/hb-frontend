import React, { useReducer, useEffect, useState } from 'react';

//import './users.css';
import  {Table}  from "react-bootstrap";

import {getUsers} from "../axApi";
import { useStateValue } from '../state/state';


function Users () {
    //const [users, setUsers] = useState([])
    //const [isLoading, setIsLoading] = useState(false)
    const [{ theme, users2}, dispatch] = useStateValue();
    const isLoading = false

    // useEffect(()=>{
    //   const fetchData = async () => {
    //     setIsLoading(true)
    //     const res = await getUsers()
    //     console.log(res)
    //     setUsers(res.data)
    //     setIsLoading(false)
    //   }

    //   fetchData()

    // },[])
 
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
          {isLoading ? (<p>isLoading...</p>)
          :<tbody>
            {console.log("current theme is", theme)}
            {users2.map(u =>
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
