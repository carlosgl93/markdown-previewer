import { State } from ".";

type StateActionType =
  | {
      type: "State - ActionName";
    }
  | {
      type: "[Editor] - Handle Input";
      payload: string;
    };

export const stateReducer = (state: State, action: StateActionType): State => {
  switch (action.type) {
    case "State - ActionName":
      return { ...state };

    case "[Editor] - Handle Input":
      // obtengo todo el text y lo separo en los espacios
      const expressions = action.payload;
      return { ...state, textMarkedUp: expressions };
    default:
      return state;
  }
};
