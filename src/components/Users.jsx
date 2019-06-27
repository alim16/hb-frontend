import React, { useReducer, useEffect, useState } from 'react';
//import './users.css';
import  {Table}  from "react-bootstrap";

import {getUsers} from "../axApi";

function Users () {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
      const fetchData = async () => {
        setIsLoading(true)
        const res = await getUsers()
        console.log(res)
        setUsers(res.data)
        setIsLoading(false)
      }

      fetchData()

    },[])
 
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
            {users.map(u =>
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
