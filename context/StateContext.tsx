import { createContext } from "react";

interface ContextProps {
  textToMarkUp: string[];
  textMarkedUp: string;

  handleEditorInput: (event: KeyboardEvent) => void;
}
export const StateContext = createContext({} as ContextProps);
