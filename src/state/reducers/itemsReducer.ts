export const itemsReducer = (itemsState:any, action:any) => {

    switch (action.type) {
    
        case 'FETCH_ITEMS_INIT':
                console.log("inside itemsReducer", itemsState)
          return {
            ...itemsState,
             isLoadingItems: true,
             isError: false
          };
         case 'FETCH_ITEMS_SUCCESS':
          return {
            ...itemsState,
             isLoadingItems: false,
             isError: false,
             data: action.payload
          };
         case 'FETCH_ITEMS_FAILURE':
          return {
            ...itemsState,
             isLoadingItems: false,
             isError: true
          };
            //might need to throw error for default of items reducers
          default:
            return itemsState;
        }
      };