import { ChakraProvider } from "@chakra-ui/react";

import BookRidePage from "./pages/Book Ride/BookRidePage";
import Navbar from "./components/Project/Header/Navbar";
import { useDropContext } from "./hooks/useDropContext";
import { usePickupContext } from "./hooks/usePickupContext";
// import { TestGoogle } from "./pages/Home/TestGoogle";

function App() {
    const { dropLocation } = useDropContext();
    const { pickupLocation } = usePickupContext();

    return (
        <ChakraProvider>
            <div className="App">
                <Navbar />
                <BookRidePage></BookRidePage>
                {/* <TestGoogle></TestGoogle> */}
            </div>
            <p>Pickup Location: {pickupLocation} - App.js file</p>
            <p>Drop Location: {dropLocation} - App.js file</p>
        </ChakraProvider>
    );
}

export default App;
