import React from "react";
import { Marker } from "@react-google-maps/api";
import useLoadGoogleMaps from "../../../../../hooks/utility hooks/Google Map/useLoadGoogleMaps";

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
            // eslint-disable-next-line no-undef
            animation={google.maps.Animation.DROP}
            label={props.markerLabel}
        ></Marker>
    );
};
export default GoogleMapMarker;
