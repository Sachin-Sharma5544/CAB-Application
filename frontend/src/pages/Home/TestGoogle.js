import React from "react";
import { useContext, useState } from "react";
import MapContextProvider from "../../context/PickupLocationContext";

export const TestGoogle = () => {
    const [location, setLocation] = useState("");
    const { autocomplete } = useContext(MapContextProvider);

    const handleInputChange = (event) => {
        setLocation(event.target.value);

        if (autocomplete) {
            autocomplete.getPlacePredictions(
                { input: event.target.value },
                (predictions) => {
                    console.log(predictions);
                }
            );
        }
    };
    return (
        <div>
            <form action="">
                Enter Location:<br></br>
                <input type="text" placeholder="Enter your location"></input>
            </form>
        </div>
    );
};
