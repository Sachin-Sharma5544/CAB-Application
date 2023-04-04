import { SkeletonText } from "@chakra-ui/react";
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    LoadScript,
} from "@react-google-maps/api";
import Aux from "../../../HOC/Aux";

const GoogleMaps = (props) => {
    // const { isLoaded } = useJsApiLoader({
    //     googleMapsApiKey: process.env.REACT_APP_API_KEY,
    //     libraries: [process.env.REACT_APP_LIBRARY],
    // });

    // if (!isLoaded) {
    //     return <SkeletonText></SkeletonText>;
    // }
    const cen = { lat: 28.6659158, lng: 77.1488977 };
    // const success = (pos) => {
    //     console.log(pos, "jj");
    // };
    // const cuttPos = navigator.geolocation.getCurrentPosition(success);
    // console.log(cuttPos, "aa");

    return (
        <Aux>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_API_KEY}
                // libraries={[process.env.REACT_APP_LIBRARY]}
            >
                <GoogleMap
                    center={cen}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    zoom={17}
                    onLoad={(map) => {
                        props.setMap(map);
                    }}
                >
                    <Marker position={cen}></Marker>
                </GoogleMap>
            </LoadScript>
        </Aux>
    );
};

export default GoogleMaps;
