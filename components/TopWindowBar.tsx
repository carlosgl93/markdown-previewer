// React & dependencies
import { FC, MutableRefObject, useState } from "react";

// Material Components
import { Button, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import MinimizeIcon from "@mui/icons-material/Minimize";
// My components

// Queries & Mutations

// Typescript
interface Props {
  childrenRef: MutableRefObject<any>;
  icon: any;
}
const TopWindowBar: FC<Props> = ({ childrenRef, icon }) => {
  const theme = useTheme();
  const [maximized, setMaximized] = useState(false);
  const [minimized, setMinimized] = useState(false);

  console.log({ childrenRef });

  const handleMaximize = () => {
    setMaximized(!maximized);
    childrenRef.current.style.height = maximized ? "100vh" : "auto";
    childrenRef.current.style.width = maximized ? "100vw" : "auto";
  };

  const handleMinimize = () => {
    setMinimized(!minimized);
    childrenRef.current.style.height = minimized ? "0vh" : "auto";
  };

  return (
    /* Box to show as a topbar 'like windows' with the icon left
          and the main actions on the right side */
    <Box
      id={childrenRef + "topWindowBar"}
      display='flex'
      justifyContent='space-between'
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          m: "0.3vh 0.5vw",
        }}
      >
        {/* Left corner */}
        {icon}
      </Box>
      <Box
        sx={{
          m: "0.3vh 0.5vw",
        }}
      >
        {/* CONTAIN RIGHT ITEMS */}
        <Box>
          <Button
            onClick={handleMinimize}
            sx={{ color: theme.palette.secondary.main }}
          >
            <MinimizeIcon />
          </Button>
          {/* ICON TO MINIMIZE */}

          {/* ICON TO EXPAND WINDOW */}
          <Button
            onClick={() => handleMaximize()}
            sx={{ color: theme.palette.secondary.main }}
          >
            <AspectRatioIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default TopWindowBar;
