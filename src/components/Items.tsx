import React, { useEffect} from 'react'
import  {Table}  from "react-bootstrap";
import FoodItem from './FoodItem' 
import {getItems} from "../axApi";
import { useStateValue, IState } from '../state/state';
import styled from 'styled-components';

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
    
    const ItemsWrapper = styled.div` 
    .food-list {
      max-width: 70%;
      display: grid;
      grid-gap: 1em;
      margin-left: 60px;
      margin-right: 60px;
    
      @media screen and (min-width: 500px) {
        grid-template-columns: repeat(
          auto-fill,
          minmax(300px, 1fr)
        ); // 300px is the min width of the child before it breaks onto a new line
      }
    
      @media screen and (min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
      }
    
      background-color: white;
      margin: auto;
      border: 1px solid #efefef;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
      padding: 30px;
      margin-top: 30px;
    }
    `
      
      return (
       <ItemsWrapper>
        <div >
          <h1> Items list</h1>
          <div className="food-list">
            {itemsState.isLoadingItems ? (
              <div>Loading ...</div>
            ) : (
                itemsState.data && itemsState.data.map((item) =>
                 <FoodItem
                 key={item.id}
                 item_name={item.item_name}
                 price={item.price}
                 category={item.category}
               />)
            )}
          </div>
          </div>
        </ItemsWrapper>
      );
    
  }

  export default ItemsTable
