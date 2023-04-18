import { useEffect, useState } from "react";
import useVehicleContext from "../../../hooks/context hooks/Vehicle /useVehicleContext";

const useFetchVehicle = (dispatch) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchVehicles = async () => {
            const response = await fetch("http://localhost:3501/vehicle/");
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_VEHICLE", payload: json });
                setIsLoading(false);
            }

            if (!response.ok) {
                setIsLoading(false);
                setError(json.error);
            }
        };

        fetchVehicles();
    }, []);

    return { isLoading, error };
};

export default useFetchVehicle;
