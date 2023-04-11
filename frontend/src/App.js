import { ChakraProvider } from "@chakra-ui/react";

import BookRidePage from "./pages/Book Ride/BookRidePage";
import Navbar from "./components/Containers/Header/Navbar";
import { useDropContext } from "./hooks/useDropContext";
import { usePickupContext } from "./hooks/usePickupContext";

function App() {
    const { dropLocation, lat: dropLat, lng: dropLng } = useDropContext();
    const { pickupLocation, lat: pickLat, lng: pickLng } = usePickupContext();

    console.log(dropLocation, dropLat, dropLng);

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
