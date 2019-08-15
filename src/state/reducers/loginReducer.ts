export const loginReducer = (loginState:any, action:any) => {

    switch (action.type) {
    
        case 'UPDATE_LOGIN_FIELD':
          const { name, value } = action.payload
          return {
            ...loginState,
            [name]: value,
          };
          default:
            return loginState;
        }
      };
      