import { ChakraProvider } from "@chakra-ui/react";
import BookRidePage from "./pages/Book Ride/BookRidePage";
import CustomerLoginPage from "./pages/Login/CustomerLoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DriverLoginPage from "./pages/Login/DriverLoginPage";
import HeaderAllPages from "./pages/All Pages Header/HeaderAllPages";
import CustomerSignupPage from "./pages/Signup/CustomerSignupPage";
import DriverSignupPage from "./pages/Signup/DriverSignupPage";

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
                        <Route
                            path="/driver/login"
                            element={<DriverLoginPage />}
                        />
                        <Route
                            path="/driver/signup"
                            element={<DriverSignupPage />}
                        ></Route>
                        <Route
                            path="/customer/signup"
                            element={<CustomerSignupPage />}
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </ChakraProvider>
    );
}

export default App;
