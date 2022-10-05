// React & dependencies
import { FC, useContext, useRef } from "react";

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

  const { textMarkedUp } = useContext(StateContext);

  return (
    <Box id={id}>
      <TopWindowBar
        childrenRef={markupRef}
        icon={
          <Button sx={{ color: theme.palette.secondary.main }}>
            <AutoAwesomeIcon />
          </Button>
        }
      />
      <Box
        ref={markupRef}
        sx={{
          backgroundColor: theme.palette.background.paper,
          height: "50vh",
        }}
      >
        {textMarkedUp}
      </Box>
    </Box>
  );
};
export default PreviewContainer;
