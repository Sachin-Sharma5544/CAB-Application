import { CircularProgress } from "@chakra-ui/react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import Aux from "../../../Hoc/Aux";
import useLoadGoogleMaps from "../../../../hooks/useLoadGoogleMaps";
import useCurrentLocation from "../../../../hooks/useCurrentLocation";
import GoogleMapMarker from "./map marker/GoogleMapMarker";
import usePickupLocation from "../../../../hooks/usePickupLocation";
import useDropLocation from "../../../../hooks/useDropLocation";
import useCalculateRoute from "../../../../hooks/useCalculateRoute";

const GoogleMaps = (props) => {
    const { currPos } = useCurrentLocation();
    const isLoaded = useLoadGoogleMaps();

    const { pickupLocation, pickupPosition } = usePickupLocation();
    const { dropLocation, dropPosition } = useDropLocation();
    let { directionsResponse } = useCalculateRoute(
        pickupLocation,
        dropLocation
    );

    if (pickupLocation === "" || dropLocation === "") {
        directionsResponse = null;
    }

    if (!isLoaded) {
        return (
            <CircularProgress
                className="Map__ProgressBar"
                isIndeterminate
                color="green.300"
            />
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
                {pickupLocation && (
                    <GoogleMapMarker pos={pickupPosition}></GoogleMapMarker>
                )}
                {dropLocation && (
                    <GoogleMapMarker pos={dropPosition}></GoogleMapMarker>
                )}
                {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                )}
            </GoogleMap>
        </Aux>
    );
};

export default GoogleMaps;
