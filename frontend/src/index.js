import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DropLocationContextProvider } from "./context/DropLocationContext";
import { PickuoLocationContextProvider } from "./context/PickupLocationContext";
import { CustomerAuthContextProvider } from "./context/CustomerAuthContext";
import { DriverAuthContextProvider } from "./context/DriverAuthContext";
import { VehicleContextProvider } from "./context/VehicleContext";
import { CustomerRideContextProvider } from "./context/CustomerRideContext";
import { DriverBookingContextProvider } from "./context/DriverBookingContext";

import { SocketContextProvider } from "./context/SocketContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <SocketContextProvider>
            <CustomerAuthContextProvider>
                <DriverAuthContextProvider>
                    <VehicleContextProvider>
                        <PickuoLocationContextProvider>
                            <DropLocationContextProvider>
                                <DriverBookingContextProvider>
                                    <CustomerRideContextProvider>
                                        <App />
                                    </CustomerRideContextProvider>
                                </DriverBookingContextProvider>
                            </DropLocationContextProvider>
                        </PickuoLocationContextProvider>
                    </VehicleContextProvider>
                </DriverAuthContextProvider>
            </CustomerAuthContextProvider>
        </SocketContextProvider>
    </React.StrictMode>
);
