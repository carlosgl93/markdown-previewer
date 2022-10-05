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
      const expressions = action.payload.split(" ");
      console.log({ expressions });
      // TODO: RESULTS = LOGIC TO MARKUP THE EXTRACTED VALUES IN EXPRESSIONS
      const results = expressions;
      return { ...state, textToMarkUp: expressions, textMarkedUp: expressions };
    default:
      return state;
  }
};
