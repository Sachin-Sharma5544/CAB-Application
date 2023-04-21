import { CircularProgress } from "@chakra-ui/react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import Aux from "../../../HOC/AuxComponent";
import useLoadGoogleMaps from "../../../../hooks/utility hooks/Google Map/useLoadGoogleMaps";
import useCurrentLocation from "../../../../hooks/utility hooks/Location/useCurrentLocation";
import GoogleMapMarker from "./map marker/GoogleMapMarker";
import usePickupLocation from "../../../../hooks/utility hooks/Location/usePickupLocation";
import useDropLocation from "../../../../hooks/utility hooks/Location/useDropLocation";
import useCalculateRoute from "../../../../hooks/utility hooks/Location/useCalculateRoute";
import useCurrentAddress from "../../../../hooks/utility hooks/Location/useCurrentAddress";

const GoogleMaps = (props) => {
    const { currPos } = useCurrentLocation();
    const isLoaded = useLoadGoogleMaps();

    const { currentAddress, error } = useCurrentAddress();

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
            {isLoaded && (
                <GoogleMap
                    center={currPos}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    zoom={15}
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
            )}
        </Aux>
    );
};

export default GoogleMaps;
