import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DropLocationContextProvider } from "./context/DropLocationContext";
import { PickuoLocationContextProvider } from "./context/PickupLocationContext";
import { CustomerAuthContextProvider } from "./context/CustomerAuthContext";
import { DriverAuthContextProvider } from "./context/DriverAuthContext";
import { VehicleContextProvider } from "./context/VehicleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CustomerAuthContextProvider>
            <DriverAuthContextProvider>
                <VehicleContextProvider>
                    <PickuoLocationContextProvider>
                        <DropLocationContextProvider>
                            {/* <App /> */}

                            <App />
                        </DropLocationContextProvider>
                    </PickuoLocationContextProvider>
                </VehicleContextProvider>
            </DriverAuthContextProvider>
        </CustomerAuthContextProvider>
    </React.StrictMode>
);
