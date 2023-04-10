import { SkeletonText, CircularProgress } from "@chakra-ui/react";
import { GoogleMap } from "@react-google-maps/api";
import Aux from "../../../Hoc/Aux";
import useLoadGoogleMaps from "../../../../hooks/useLoadGoogleMaps";
import useCurrentLocation from "../../../../hooks/useCurrentLocation";
import GoogleMapMarker from "./map marker/GoogleMapMarker";
import { useDropContext } from "../../../../hooks/useDropContext";
import { usePickupContext } from "../../../../hooks/usePickupContext";
import { useEffect, useState } from "react";

const marker = [
    { id: 1, dropPoint: "", position: { lat: null, lng: null } },
    { id: 2, pickupPoint: "", position: { lat: null, lng: null } },
];

const GoogleMaps = (props) => {
    const { currPos } = useCurrentLocation();
    const isLoaded = useLoadGoogleMaps();
    const { dropLocation, lat: pickLat, lng: pickLng } = useDropContext();
    const { pickupLocation, lat: dropLat, lng: dropLng } = usePickupContext();

    const [mapMarker, setMapMarker] = useState(marker);

    useEffect(() => {
        if (pickLat !== null && pickLng !== null) {
            const newMarker = [...mapMarker];
            newMarker[1].pickupPoint = pickupLocation;
            newMarker[1].position.lat = pickLat;
            newMarker[1].position.lng = pickLng;
            setMapMarker(newMarker);
        }

        if (dropLat !== null && dropLng !== null) {
            const newMarker = [...mapMarker];
            newMarker[0].dropPoint = dropLocation;
            newMarker[0].position.lat = dropLat;
            newMarker[0].position.lng = dropLng;
            setMapMarker(newMarker);
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
                {marker[0].dropPoint && (
                    <GoogleMapMarker pos={marker[0].position}></GoogleMapMarker>
                )}

                {marker[1].pickupPoint && (
                    <GoogleMapMarker pos={marker[1].position}></GoogleMapMarker>
                )}
            </GoogleMap>
        </Aux>
    );
};

export default GoogleMaps;
