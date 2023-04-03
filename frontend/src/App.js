import { ChakraProvider } from "@chakra-ui/react";

import BookRidePage from "./pages/Book Ride/BookRidePage";
import Navbar from "./components/Project/Header/Navbar";

function App() {
    console.log(process.env.REACT_APP_API_KEY);
    return (
        <ChakraProvider>
            <div className="App">
                <Navbar />
                <BookRidePage></BookRidePage>
            </div>
        </ChakraProvider>
    );
}

export default App;
