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
import FooterPage from "./pages/Footer/FooterPage";
import DriveWithUsPage from "./pages/Drive With Us/DriveWithUsPage";
import CustomerRideDetailsPage from "./pages/Ride Details/CustomerRideDetailsPage";
import DriverBookingDetailsPage from "./pages/Booking Details/DriverBookingDetailsPage";
import CustomerWelcomePage from "./pages/Customer Welcome/CustomerWelcomePage";
import DriverWelcomePage from "./pages/Driver Welcome/DriverWelcomePage";

import { useState } from "react";
import useSocketContext from "./hooks/context hooks/Socket/useSocketContext";
import useScoket from "./hooks/utility hooks/Socket/useScoket";

function App() {
    const { user: custUser } = useCustomerAuthContext();
    const { user: drivUser } = useDriverAuthContext();

    console.log(drivUser);

    return (
        <ChakraProvider>
            <div className="App">
                <BrowserRouter>
                    <HeaderAllPages></HeaderAllPages>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/drive" element={<DriveWithUsPage />} />
                        <Route path="/bookride" element={<BookRidePage />} />
                        <Route
                            path="/customer/welcome"
                            element={
                                custUser ? (
                                    <CustomerWelcomePage />
                                ) : (
                                    <Navigate to="/customer/login" />
                                )
                            }
                        />

                        <Route
                            path="/driver/welcome"
                            element={
                                drivUser ? (
                                    <DriverWelcomePage />
                                ) : (
                                    <Navigate to="/driver/login" />
                                )
                            }
                        />
                        <Route
                            path="/customer/login"
                            element={
                                !custUser ? (
                                    <CustomerLoginPage />
                                ) : (
                                    <Navigate to="/customer/welcome" />
                                )
                            }
                        />

                        <Route
                            path="/driver/vehicle/details"
                            element={
                                drivUser ? (
                                    <VehiclePage />
                                ) : (
                                    <Navigate to="/driver/login" />
                                )
                            }
                        />

                        <Route
                            path="/driver/vehicle/new"
                            element={
                                drivUser ? (
                                    <AddVehiclePage />
                                ) : (
                                    <Navigate to="/driver/login" />
                                )
                            }
                        />
                        <Route
                            path="/driver/login"
                            element={
                                !drivUser ? (
                                    <DriverLoginPage />
                                ) : (
                                    <Navigate to="/driver/welcome" />
                                )
                            }
                        />
                        <Route
                            path="/driver/signup"
                            element={
                                !drivUser ? (
                                    <DriverSignupPage />
                                ) : (
                                    <Navigate to="/driver/welcome" />
                                )
                            }
                        ></Route>
                        <Route
                            path="/customer/signup"
                            element={
                                !custUser ? (
                                    <CustomerSignupPage />
                                ) : (
                                    <Navigate to="/customer/welcome" />
                                )
                            }
                        ></Route>
                        <Route
                            path="/ride/details"
                            element={
                                custUser ? (
                                    <CustomerRideDetailsPage />
                                ) : (
                                    <Navigate to="/customer/login" />
                                )
                            }
                        ></Route>
                        <Route
                            path="/booking/details"
                            element={
                                drivUser ? (
                                    <DriverBookingDetailsPage />
                                ) : (
                                    <Navigate to="/driver/login" />
                                )
                            }
                        ></Route>
                    </Routes>
                    <FooterPage></FooterPage>
                </BrowserRouter>
            </div>
        </ChakraProvider>
    );
}

export default App;
