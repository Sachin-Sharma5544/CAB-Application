import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DropLocationContextProvider } from "./context/DropLocationContext";
import { PickuoLocationContextProvider } from "./context/PickupLocationContext";
import { CustomerAuthContextProvider } from "./context/customerAuthContext";
import { DriverAuthContextProvider } from "./context/DriverAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <DriverAuthContextProvider>
            <CustomerAuthContextProvider>
                <PickuoLocationContextProvider>
                    <DropLocationContextProvider>
                        <App />
                    </DropLocationContextProvider>
                </PickuoLocationContextProvider>
            </CustomerAuthContextProvider>
        </DriverAuthContextProvider>
    </React.StrictMode>
);
