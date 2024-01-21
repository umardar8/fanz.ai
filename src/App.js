import "./App.css";
import WebRoutes from "./config/web-routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      {/* <div className="App"> */}
      <WebRoutes />
      {/* </div> */}
    </ChakraProvider>
  );
}

export default App;
