import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";

const App = () => (
  <ChakraProvider theme={theme}>
    <Container minHeight="100vh">
      <BrowserRouter>
        <Navbar />
        <MainContainer />
      </BrowserRouter>
    </Container>
  </ChakraProvider>
);

export default App;
