export const themeReducer = (state:any, action:any) => {

    switch (action.type) {
      case 'CHANGE_THEME':
        console.log("in reducer changing theme:",state)
        return {
          ...state,
          theme: action.newTheme
        };
       case 'SET_DEFAULT_THEME':
       return {
        ...state,
        theme: action.newTheme
       };
        //might need to throw for default of users reducers
      default:
        return state;
    }
  };