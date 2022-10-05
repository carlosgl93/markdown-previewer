import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";

import StateProvider from "../context/StateProvider";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </ThemeProvider>
  );
}

export default MyApp;
