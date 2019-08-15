import React, {createContext, useContext, useReducer} from 'react';

export interface IState { //move to stateTypes files
  theme?: object,
  usersState: {
    isLoadingUsers: boolean,
    isError: boolean,
    data: any[],
  },
  itemsState: {
    isLoadingItems: boolean,
    isError: boolean,
    data: any[],
  },
  loginState: {
    email: string,
    password: string,
    isAuth:boolean,
    submitted: boolean,
    loading: boolean,
    error: string
  }
}

interface IReducer{
  (action: any):IState
}

interface IContextProps extends Array<IState|IReducer>{0:IState; 1:IReducer}

export const StateContext = createContext({} as IContextProps);

export const StateProvider = ({reducer, initialState, children} : 
  {reducer:((prevState: any, action: any)=>IState),initialState:IState,children:object}) =>{
    let val:[any,any] = useReducer(reducer, initialState)
  return (
    
  <StateContext.Provider value={val}>
    {children}
  </StateContext.Provider>
);
}

export const useStateValue = () => useContext(StateContext);