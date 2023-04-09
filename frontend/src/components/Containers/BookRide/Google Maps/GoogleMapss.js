import { SkeletonText, CircularProgress } from "@chakra-ui/react";
import { GoogleMap } from "@react-google-maps/api";
import Aux from "../../../Hoc/Aux";
import useLoadGoogleMaps from "../../../../hooks/useLoadGoogleMaps";
import useCurrentLocation from "../../../../hooks/useCurrentLocation";
import GoogleMapMarker from "./map marker/GoogleMapMarker";
import { useDropContext } from "../../../../hooks/useDropContext";
import { usePickupContext } from "../../../../hooks/usePickupContext";
import { useEffect, useState } from "react";

const GoogleMaps = (props) => {
    const { currPos } = useCurrentLocation();
    const isLoaded = useLoadGoogleMaps();
    const { lat: pickLat, lng: pickLng } = useDropContext();
    const { lat: dropLat, lng: dropLng } = usePickupContext();

    const [pickCoord, setPickCoord] = useState({ lat: pickLat, lng: pickLng });
    useEffect(() => {
        setPickCoord({ lat: pickLat, lng: pickLng });
    }, [pickLat, pickLng]);

    console.log(pickLat);

    if (!isLoaded) {
        return (
            <CircularProgress
                className="Map__ProgressBar"
                isIndeterminate
                color="green.300"
            />
            // <SkeletonText />
        );
    }

    return (
        <Aux>
            <GoogleMap
                center={currPos}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                zoom={12}
                onLoad={(map) => {
                    props.setMap(map);
                }}
            >
                <GoogleMapMarker pos={pickCoord}></GoogleMapMarker>
                <GoogleMapMarker
                    pos={{ lat: dropLat, lng: dropLng }}
                ></GoogleMapMarker>
            </GoogleMap>
        </Aux>
    );
};

export default GoogleMaps;
