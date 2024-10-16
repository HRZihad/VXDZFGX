import { Box } from "@mui/material";
import React from "react";
import Topbar from "./Topbar/Topbar";
import DetailsCard from "./Card/DetailsCard";

const Layout1 = () => {
  return (
    <Box className=" px-6 py-6">
      <Topbar />
      <Box sx={{ mt: "30px" }}>
        <DetailsCard />
      </Box>
    </Box>
  );
};

export default Layout1;
