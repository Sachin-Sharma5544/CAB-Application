import { SkeletonText, CircularProgress } from "@chakra-ui/react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import Aux from "../../../Hoc/Aux";
import useLoadGoogleMaps from "../../../../hooks/useLoadGoogleMaps";
import { useEffect, useState } from "react";

const GoogleMaps = (props) => {
    const [currPos, setCurrPos] = useState(null);

    const isLoaded = useLoadGoogleMaps();
    useEffect(() => {
        const success = (pos) => {
            console.log(pos);
            console.log(pos.coords.latitude, pos.coords.longitude, "jj");
            setCurrPos({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        };
        navigator.geolocation.getCurrentPosition(success);
    }, [setCurrPos]);

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
                <Marker position={currPos}></Marker>
            </GoogleMap>
        </Aux>
    );
};

export default GoogleMaps;
