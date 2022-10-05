import React, { FC, useReducer } from "react";
import { StateContext } from "./StateContext";
import { stateReducer } from "./stateReducer";

export interface State {
  textToMarkUp: string;
}

const State_INITIAL_STATE: State = {
  textToMarkUp: "",
};

interface Props {
  children: React.ReactNode;
}

const StateProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, State_INITIAL_STATE);

  return (
    <StateContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
