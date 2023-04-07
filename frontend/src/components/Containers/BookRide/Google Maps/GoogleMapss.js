import { SkeletonText, CircularProgress } from "@chakra-ui/react";
import { GoogleMap } from "@react-google-maps/api";
import Aux from "../../../Hoc/Aux";
import useLoadGoogleMaps from "../../../../hooks/useLoadGoogleMaps";
import useCurrentLocation from "../../../../hooks/useCurrentLocation";
import GoogleMapMarker from "./map marker/GoogleMapMarker";

const GoogleMaps = (props) => {
    const { currPos } = useCurrentLocation();
    const isLoaded = useLoadGoogleMaps();

    if (!isLoaded) {
        return <CircularProgress isIndeterminate color="green.300" />;
    }

    return (
        <Aux>
            <GoogleMap
                center={currPos}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                zoom={16}
                onLoad={(map) => {
                    props.setMap(map);
                }}
            >
                <GoogleMapMarker pos={currPos}></GoogleMapMarker>
            </GoogleMap>
        </Aux>
    );
};

export default GoogleMaps;
