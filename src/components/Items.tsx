import React, { useEffect} from 'react'
import  {Table}  from "react-bootstrap";
import {getItems} from "../axApi";
import { useStateValue, IState } from '../state/state';

function ItemsTable(){

    const [{itemsState}, dispatch] = useStateValue();


     useEffect(() => {
      const fetchData = async () => {
        console.log("inside fetch:",itemsState)
        dispatch({ type: 'FETCH_ITEMS_INIT' });

        try {
          const result = await getItems()
   
          dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: result.data });
       
          
         
        } catch (error) {
          dispatch({ type: 'FETCH_ITEMS_FAILURE' });
        }
      };
  
      fetchData();
      return
    }, []);
      
      return (
       
        <div>
          <h1> Items list</h1>
          {/*striped bordered condensed hover*/}
          <Table >
            <thead>
              <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Item description</th>
              </tr>
            </thead>
            {itemsState.isLoadingItems ? (
              <div>Loading ...</div>
            ) : (
              <tbody>
                {itemsState.data && itemsState.data.map((item) =>
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
