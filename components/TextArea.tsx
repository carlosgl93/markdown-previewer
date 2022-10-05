// React & dependencies
import { FC, useContext, useRef } from "react";

// Material Components
import { Box, Button, TextareaAutosize, useTheme } from "@mui/material";
import KeyboardIcon from "@mui/icons-material/Keyboard";

// My components
import TopWindowBar from "./TopWindowBar";
import { StateContext } from "../context";
import { marked } from "marked";

// Queries & Mutations

// Typescript
interface Props {
  id: string;
}
const TextArea: FC<Props> = ({ id }) => {
  const theme = useTheme();
  const { handleEditorInput, textMarkedUp } = useContext(StateContext);

  const textAreaRef = useRef<any>();

  return (
    <Box display='flex' flexDirection='column'>
      <TopWindowBar
        childrenRef={textAreaRef}
        icon={
          <Button
            sx={{ color: theme.palette.secondary.main, cursor: "default" }}
          >
            <KeyboardIcon />
          </Button>
        }
      />

      <TextareaAutosize
        ref={textAreaRef}
        id={id}
        cols={90}
        minRows={20}
        style={{
          backgroundColor: theme.palette.background.paper,
          overflow: "scroll",
          height: "auto",
        }}
        defaultValue={textMarkedUp}
        onChange={(e: any) => handleEditorInput(e)}
      />
    </Box>
  );
};
export default TextArea;
