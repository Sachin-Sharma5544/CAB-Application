import { ChakraProvider } from "@chakra-ui/react";
import BookRidePage from "./pages/Book Ride/BookRidePage";
import CustomerLoginPage from "./pages/Login/CustomerLoginPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DriverLoginPage from "./pages/Login/DriverLoginPage";
import HeaderAllPages from "./pages/All Pages Header/HeaderAllPages";
import CustomerSignupPage from "./pages/Signup/CustomerSignupPage";
import DriverSignupPage from "./pages/Signup/DriverSignupPage";
import useCustomerAuthContext from "./hooks/context hooks/Authentication/useCustomerAuthContext";
import useDriverAuthContext from "./hooks/context hooks/Authentication/useDriverAuthContext";
import VehiclePage from "./pages/Vehicle /VehiclePage";
import AddVehiclePage from "./pages/Vehicle /AddVehiclePage";
import Home from "./pages/Home/Home";

function App() {
    const { user: custUser } = useCustomerAuthContext();
    const { user: drivUser } = useDriverAuthContext();

    return (
        <ChakraProvider>
            <div className="App">
                <BrowserRouter>
                    <HeaderAllPages></HeaderAllPages>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/bookride"
                            element={
                                !custUser ? (
                                    <Navigate to="/customer/login" />
                                ) : (
                                    <BookRidePage />
                                )
                            }
                        />
                        <Route
                            path="/customer/login"
                            element={
                                !custUser ? (
                                    <CustomerLoginPage />
                                ) : (
                                    <Navigate to="/bookride" />
                                )
                            }
                        />

                        <Route
                            path="/driver/vehicle/details"
                            element={<VehiclePage />}
                        />

                        <Route
                            path="/driver/vehicle/new"
                            element={<AddVehiclePage />}
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
