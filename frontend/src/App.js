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

import io from "socket.io-client";
import { useState } from "react";

const socket = io("http://localhost:3501", {
    transports: ["websocket"],
});

function App() {
    const { user: custUser } = useCustomerAuthContext();
    const { user: drivUser } = useDriverAuthContext();
    const [socketData, setScoketData] = useState();

    socket.on("Vehicle", (data) => {
        setScoketData(data);
    });

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
                            element={<AddVehiclePage />}
                        />
                        <Route
                            path="/driver/login"
                            element={
                                !drivUser ? (
                                    <DriverLoginPage />
                                ) : (
                                    <Navigate to="/booking/details" />
                                )
                            }
                        />
                        <Route
                            path="/driver/signup"
                            element={
                                !drivUser ? (
                                    <DriverSignupPage />
                                ) : (
                                    <Navigate to="/booking/details" />
                                )
                            }
                        ></Route>
                        <Route
                            path="/customer/signup"
                            element={<CustomerSignupPage />}
                        ></Route>
                        <Route
                            path="/ride/details"
                            element={<CustomerRideDetailsPage />}
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
                    <h1>{socketData}</h1>
                    <FooterPage></FooterPage>
                </BrowserRouter>

                {/* <button
                    onClick={() => {
                        socket.emit("Join_Room", 123);
                    }}
                >
                    Emit Button
                </button> */}
            </div>
        </ChakraProvider>
    );
}

export default App;
