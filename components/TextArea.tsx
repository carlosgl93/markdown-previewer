// React & dependencies
import { FC, useRef } from "react";

// Material Components
import { Box, Button, TextareaAutosize, useTheme } from "@mui/material";
import KeyboardIcon from "@mui/icons-material/Keyboard";

// My components
import TopWindowBar from "./TopWindowBar";

// Queries & Mutations

// Typescript
interface Props {
  id: string;
}
const TextArea: FC<Props> = ({ id }) => {
  const theme = useTheme();

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
        }}
      />
    </Box>
  );
};
export default TextArea;
