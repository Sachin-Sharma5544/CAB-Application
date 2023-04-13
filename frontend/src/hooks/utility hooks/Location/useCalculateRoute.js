import { useEffect, useState } from "react";
import useDropLocation from "./useDropLocation";
import usePickupLocation from "./usePickupLocation";

const useCalculateRoute = (pickupLocation, dropLocation) => {
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");

    useEffect(() => {
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService();

        if (pickupLocation && dropLocation) {
            directionsService.route(
                {
                    origin: pickupLocation,
                    destination: dropLocation,
                    // eslint-disable-next-line no-undef
                    travelMode: google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === "OK") {
                        setDirectionsResponse(result);
                        setDistance(result.routes[0].legs[0].distance.text);
                        setDuration(result.routes[0].legs[0].duration.text);
                    }
                }
            );
        } else {
            setDirectionsResponse(null);
            setDistance("");
            setDuration("");
        }
    }, [pickupLocation, dropLocation]);
    console.log(distance, duration, directionsResponse);

    return { distance, duration, directionsResponse };
};

export default useCalculateRoute;
