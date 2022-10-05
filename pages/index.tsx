import type { NextPage } from "next";
import Head from "next/head";

import TextArea from "../components/TextArea";
import PreviewContainer from "../components/PreviewContainer";
import { Box, Grid } from "@mui/material";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CGL Markdown Previewer</title>
        <meta name='description' content='My take on one of FCC Projects' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box display='flex' justifyContent='center'>
        <Box>
          {/* Component to insert the text that the user wants to see as markdown */}
          <TextArea id={"editor"} />
        </Box>
      </Box>
      <Box>
        {/* Component to display the text that the user inserted into the textarea element  */}
        <PreviewContainer id='preview' />
      </Box>
    </>
  );
};

export default Home;
