import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DropLocationContextProvider } from "./context/DropLocationContext";
import { PickuoLocationContextProvider } from "./context/PickupLocationContext";
import { CustomerAuthContextProvider } from "./context/CustomerAuthContext";
import { DriverAuthContextProvider } from "./context/DriverAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CustomerAuthContextProvider>
            <DriverAuthContextProvider>
                <PickuoLocationContextProvider>
                    <DropLocationContextProvider>
                        <App />
                    </DropLocationContextProvider>
                </PickuoLocationContextProvider>
            </DriverAuthContextProvider>
        </CustomerAuthContextProvider>
    </React.StrictMode>
);
