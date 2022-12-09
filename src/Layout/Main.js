import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Share/NavBar/NavBar";

const Main = () => {
  return (
    <Box>
      <NavBar />
      <Container>
        <Outlet></Outlet>
      </Container>
    </Box>
  );
};

export default Main;
