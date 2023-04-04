import { createContext, useState, useEffect } from "react";
import { GoogleMapsAPIContext } from "@react-google-maps/api";

export const MapContext = createContext({
    autocomplete: null,
});

function MapContextProvider({ children, apiKey }) {
    const [autocomplete, setAutocomplete] = useState(null);
    useEffect(() => {
        if (apiKey) {
            setAutocomplete(
                new window.google.maps.places.AutocompleteService()
            );
        }
    }, [apiKey]);

    return (
        <GoogleMapsAPIContext id="google-maps-api" apiKey={apiKey}>
            <MapContext.Provider value={{ autocomplete }}>
                {children}
            </MapContext.Provider>
        </GoogleMapsAPIContext>
    );
}

export default MapContextProvider;
