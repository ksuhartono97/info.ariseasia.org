import "./App.css";
import { Flex } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import MainContainer from "./components/MainContainer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Flex flexGrow={1} display="flex" h="100vh" direction="column">
      <BrowserRouter>
        <>
          <Navbar />
          <MainContainer />
        </>
      </BrowserRouter>
    </Flex>
  );
};

export default App;
