import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home/Home";

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <Navbar />
                <Home></Home>
            </div>
        </ChakraProvider>
    );
}

export default App;
