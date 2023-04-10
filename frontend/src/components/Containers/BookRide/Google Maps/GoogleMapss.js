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
    const { pickupLocation, lat: pickLat, lng: pickLng } = usePickupContext();
    const { dropLocation, lat: dropLat, lng: dropLng } = useDropContext();

    const [pickMarkerDisplay, setPickMarkerDisplay] = useState(false);
    const [dropMarkerDisplay, setDropMarkerDisplay] = useState(false);

    useEffect(() => {
        if (pickLat !== null && pickLng !== null && pickupLocation) {
            setPickMarkerDisplay(true);
        } else {
            setPickMarkerDisplay(false);
        }

        if (dropLat !== null && dropLng !== null && dropLocation) {
            setDropMarkerDisplay(true);
        } else {
            setDropMarkerDisplay(false);
        }
    }, [pickupLocation, dropLocation]);

    console.log(pickLat, "gm pick");

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
                {pickMarkerDisplay && (
                    <GoogleMapMarker
                        pos={{ lat: pickLat, lng: pickLng }}
                    ></GoogleMapMarker>
                )}

                {dropMarkerDisplay && (
                    <GoogleMapMarker
                        pos={{ lat: dropLat, lng: dropLng }}
                    ></GoogleMapMarker>
                )}
            </GoogleMap>
        </Aux>
    );
};

export default GoogleMaps;
