import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#97c6ca",
    },
    secondary: {
      main: "#e3a071",
    },
    background: {
      default: "#12888a",
      paper: "#f3efea",
    },
  },
  components: {
    MuiIcon: {
      defaultProps: {
        color: "secondary",
      },
    },
  },
});
