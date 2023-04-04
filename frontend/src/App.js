import { ChakraProvider } from "@chakra-ui/react";

import BookRidePage from "./pages/Book Ride/BookRidePage";
import Navbar from "./components/Project/Header/Navbar";
// import { TestGoogle } from "./pages/Home/TestGoogle";

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <Navbar />
                <BookRidePage></BookRidePage>
                {/* <TestGoogle></TestGoogle> */}
            </div>
        </ChakraProvider>
    );
}

export default App;
