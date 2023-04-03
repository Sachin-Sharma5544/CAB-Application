import { SkeletonText } from "@chakra-ui/react";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const GoogleMaps = () => {
    const API_KEY = "AIzaSyAFxO1iELVcqdg6oCVom3ockUbt5QZySDQ";
    const { isLoaded } = useJsApiLoader({ googleMapsApiKey: API_KEY });

    if (!isLoaded) {
        return <SkeletonText></SkeletonText>;
    }

    const success = (pos) => {
        console.log(pos, "jj");
    };
    const cuttPos = navigator.geolocation.getCurrentPosition(success);
    console.log(cuttPos, "aa");

    const cen = { lat: 28.6659158, lng: 77.1488977 };
    return (
        <GoogleMap
            center={cen}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            zoom={15}
        ></GoogleMap>
    );
};

export default GoogleMaps;
