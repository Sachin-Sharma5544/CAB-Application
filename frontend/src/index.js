import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DropLocationContextProvider } from "./context/DropLocationContext";
import { PickuoLocationContextProvider } from "./context/PickupLocationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <PickuoLocationContextProvider>
            <DropLocationContextProvider>
                <App />
            </DropLocationContextProvider>
        </PickuoLocationContextProvider>
    </React.StrictMode>
);
