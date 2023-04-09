import React from "react";
import { Marker } from "@react-google-maps/api";
import useLoadGoogleMaps from "../../../../../hooks/useLoadGoogleMaps";

const GoogleMapMarker = (props) => {
    const isLoaded = useLoadGoogleMaps();

    if (!isLoaded) {
        return;
    }

    return (
        <Marker
            position={props.pos}
            options={{
                clickable: true,
            }}
        ></Marker>
    );
};
export default GoogleMapMarker;
