import { useEffect, useState } from "react";
import useVehicleContext from "../../../hooks/context hooks/Vehicle /useVehicleContext";
import useDriverAuthContext from "../../context hooks/Authentication/useDriverAuthContext";

const useFetchVehicle = (dispatch) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useDriverAuthContext();

    useEffect(() => {
        const fetchVehicles = async () => {
            const response = await fetch("http://localhost:3501/vehicle/", {
                headers: {
                    authorization: `Bearer ${user.token}`,
                },
            });
            const json = await response.json();

            console.log(json);
            console.log(user.token, "kk");

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
