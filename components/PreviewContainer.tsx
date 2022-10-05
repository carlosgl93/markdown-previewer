// React & dependencies
import { FC, useContext, useEffect, useRef } from "react";
import { marked } from "marked";
// Material Components
import { Box, Button, TextField, useTheme } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// My components
import TopWindowBar from "./TopWindowBar";
import { StateContext } from "../context";

// Queries & Mutations

// Typescript
interface Props {
  id: string;
}
const PreviewContainer: FC<Props> = ({ id }) => {
  const theme = useTheme();
  const markupRef = useRef<any>();

  const renderer = new marked.Renderer();
  const { textMarkedUp } = useContext(StateContext);

  useEffect(() => {}, [textMarkedUp]);

  marked.setOptions({
    breaks: true,
  });

  return (
    <Box>
      <TopWindowBar
        childrenRef={markupRef}
        icon={
          <Button
            sx={{ color: theme.palette.secondary.main, cursor: "default" }}
          >
            <AutoAwesomeIcon />
          </Button>
        }
      />
      <div
        id={id}
        ref={markupRef}
        style={{
          backgroundColor: theme.palette.background.paper,
          height: "50vh",
          maxWidth: "100%",
          whiteSpace: "pre-line",
          overflow: "scroll",
        }}
        dangerouslySetInnerHTML={{
          __html: marked(textMarkedUp, { renderer: renderer }),
        }}
      ></div>
      <div />
    </Box>
  );
};
export default PreviewContainer;
