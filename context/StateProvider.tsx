import React, { FC, KeyboardEvent, useReducer } from "react";
import { StateContext } from "./StateContext";
import { stateReducer } from "./stateReducer";

export interface State {
  textToMarkUp: string[];
  textMarkedUp: string[];
}

const STATE_INITIAL_STATE: State = {
  textToMarkUp: [""],
  textMarkedUp: [""],
};

interface Props {
  children: React.ReactNode;
}

const StateProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, STATE_INITIAL_STATE);

  const handleEditorInput = (event: any) => {
    console.log({ event });
    dispatch({
      type: "[Editor] - Handle Input",
      payload: event.currentTarget.value,
    });
  };

  return (
    <StateContext.Provider
      value={{
        ...state,

        // Methods
        handleEditorInput,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
