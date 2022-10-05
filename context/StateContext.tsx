import { createContext } from "react";

interface ContextProps {
  textToMarkUp: string;
}
export const StateContext = createContext({} as ContextProps);
