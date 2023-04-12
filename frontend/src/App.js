import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

import BookRidePage from "./pages/Book Ride/BookRidePage";

import { useDropContext } from "./hooks/useDropContext";
import { usePickupContext } from "./hooks/usePickupContext";
import CustomerLoginPage from "./pages/Login/CustomerLoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DriverLoginPage from "./pages/Login/DriverLoginPage";
import HeaderAllPages from "./pages/All Pages Header/HeaderAllPages";

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <BrowserRouter>
                    <HeaderAllPages></HeaderAllPages>
                    <Routes>
                        <Route path="/bookride" element={<BookRidePage />} />
                        <Route
                            path="/customer/login"
                            element={<CustomerLoginPage />}
                        />
                        <Route
                            path="/driver/login"
                            element={<DriverLoginPage />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </ChakraProvider>
    );
}

export default App;
