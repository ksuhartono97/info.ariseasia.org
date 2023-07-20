import React from "react";
import { chakra } from "@chakra-ui/react";
import NotFoundPage from "./NotFoundPage";
import { Route, Routes } from "react-router-dom";
import HomeContainer from "./home/HomeContainer";


const MainContainer = () => {
  return (
    <chakra.main maxH="100vh" flexGrow={1} overflowY="auto" id="main-container">
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </chakra.main>
  );
};

export default MainContainer;
