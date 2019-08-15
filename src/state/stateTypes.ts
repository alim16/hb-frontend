export interface IState {
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