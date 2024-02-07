
export interface State {
    user: any;
    isFetching: boolean;
    error: boolean;
  }
  
  export interface Action {
    type: string;
    payload?: any;
  }
  
  const Reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          user: null,
          isFetching: true,
          error: false,
        };
  
      case "LOGIN_SUCCESS":
        return {
          user: action.payload,
          isFetching: false,
          error: false,
        };
      case "LOGIN_FAILURE":
        return {
          user: null,
          isFetching: false,
          error: false,
        };
        case "LogOut":
          return {
            user: null,
            isFetching: false,
            error: false,
          };
          case "UPDATE_START":
            return {
              ...state,
              isFetching:true
            };
      
          case "UPDATE_SUCCESS":
            return {
              user: action.payload,
              isFetching: false,
              error: false,
            };
          case "UPDATE_FAILURE":
            return {
              user: state.user,
              isFetching: false,
              error: true,
            };
      default:
        return state;
    }
  };
  
  export default Reducer;
