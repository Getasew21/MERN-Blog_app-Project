
import { createContext, useReducer, ReactNode, useEffect } from "react";
import Reducer, { Action, State } from "./Reducer";

interface ContextProps {
  user:any;
  isFetching: boolean;
  error: boolean;
  dispatch: React.Dispatch<Action>;
}

const INITIAL_STATE: State = {
  user: null,
  isFetching: false,
  error: false,
};

export const Context = createContext<ContextProps>({
  user: null,
  isFetching: false,
  error: false,
  dispatch: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  // console.log(localStorage.getItem("user"));
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};





