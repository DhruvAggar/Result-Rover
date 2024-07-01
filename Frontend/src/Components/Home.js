import { Box } from "@mui/material";
import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import Analysis from "./Analysis";
import Uploadfile from "./Uploadfile";

function Home() {
  return (
    <Box>
      <ButtonAppBar />
      <Analysis />
      <Uploadfile/>
    </Box>
  );
}

export default Home;
