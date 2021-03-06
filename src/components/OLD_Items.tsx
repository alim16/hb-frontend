
/*************/
//THIS FILE IS NOT USED, BUT KEPT AS AN EXAMPLE OF HOW IT WAS BEFORE GLOBAL STATE
/*************/

import React, {useState, useEffect} from 'react'
import  {Table}  from "react-bootstrap";
import {getItems} from "../axApi";


function ItemsTable(){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

     useEffect(() => {
       const fetchData = async () => {
           setIsLoading(true);
           const result = await getItems()
           setData(result.data);
           setIsLoading(false);
       };

       fetchData();
     }, []);
      
      return (
       
        <div>
          <h1> Items list</h1>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Item description</th>
              </tr>
            </thead>
            {isLoading ? (
              <div>Loading ...</div>
            ) : (
              <tbody>
                {data && data.map((item:any) =>
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.item_name}</td>
                          <td>{item.item_description}</td> 
                        </tr>
                    )}
              </tbody>
            )}
          </Table> 
        </div>
      );
    
  }

  export default ItemsTable
