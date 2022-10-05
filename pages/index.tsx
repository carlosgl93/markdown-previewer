import type { NextPage } from "next";
import Head from "next/head";
import { Box, TextareaAutosize } from "@mui/material";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CGL Markdown Previewer</title>
        <meta name='description' content='My take on one of FCC Projects' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <textarea cols={80} id='editor'></textarea> */}

      <TextareaAutosize id='editor' />

      <Box id='preview' />

      {/* <div id='preview'></div> */}
    </>
  );
};

export default Home;
