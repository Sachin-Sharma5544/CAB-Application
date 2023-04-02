import { SkeletonText } from "@chakra-ui/react";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const GoogleMaps = () => {
    const API_KEY = "AIzaSyAFxO1iELVcqdg6oCVom3ockUbt5QZySDQ";
    const { isLoaded } = useJsApiLoader({ googleMapsApiKey: API_KEY });

    if (!isLoaded) {
        return <SkeletonText></SkeletonText>;
    }

    const cen = { lat: 28.6139, lng: 77.209 };
    return (
        <GoogleMap
            center={cen}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            zoom={15}
        ></GoogleMap>
    );
};

export default GoogleMaps;
