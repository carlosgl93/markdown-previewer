import { State } from ".";

type StateActionType = {
  type: "State - ActionName";
};

export const stateReducer = (state: State, action: StateActionType): State => {
  switch (action.type) {
    case "State - ActionName":
      return { ...state };
    default:
      return state;
  }
};
