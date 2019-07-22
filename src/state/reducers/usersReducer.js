export const usersReducer = (usersState, action) => {

switch (action.type) {

    case 'FETCH_USERS_INIT':
            console.log("inside usersReducer", usersState)
      return {
        ...usersState,
         isLoadingUsers: true,
         isError: false
      };
     case 'FETCH_USERS_SUCCESS':
      return {
        ...usersState,
         isLoadingUsers: false,
         isError: false,
         data: action.payload
      };
     case 'FETCH_USERS_FAILURE':
      return {
        ...usersState,
         isLoadingUsers: false,
         isError: true
      };
        //might need to throw error for default of users reducers
      default:
        return usersState;
    }
  };