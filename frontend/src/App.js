import { ChakraProvider } from "@chakra-ui/react";

import BookRidePage from "./pages/Book Ride/BookRidePage";
import Navbar from "./components/Containers/Header/Navbar";
import { useDropContext } from "./hooks/useDropContext";
import { usePickupContext } from "./hooks/usePickupContext";
import CustomerLoginPage from "./pages/Login/CustomerLoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/bookride" element={<BookRidePage />} />
                        <Route
                            path="/customer/login"
                            element={<CustomerLoginPage />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </ChakraProvider>
    );
}

export default App;
