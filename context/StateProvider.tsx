import React, { FC, KeyboardEvent, useReducer } from "react";
import { StateContext } from "./StateContext";
import { stateReducer } from "./stateReducer";

export interface State {
  textToMarkUp: string[];
  textMarkedUp: string;
}

const STATE_INITIAL_STATE: State = {
  textToMarkUp: [""],
  textMarkedUp: `# Welcome to my React Markdown Previewer! -- You can also maximize/minimize windows.

## Made by me: Carlos Gumucio Labbé
### Here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`,
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
