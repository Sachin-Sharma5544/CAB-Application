import useVehicleContext from "../../context hooks/Vehicle /useVehicleContext";
import { useState } from "react";
import useDriverAuthContext from "../../context hooks/Authentication/useDriverAuthContext";

const useAddVehicle = () => {
    const { dispatch } = useVehicleContext();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useDriverAuthContext();

    const addVehicle = async (company, vehType, number, rcNumber, color) => {
        console.log(user);
        const respnse = await fetch("http://localhost:3501/vehicle/new", {
            method: "POST",
            body: JSON.stringify({ company, vehType, number, rcNumber, color }),
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${user.token}`,
            },
        });
        const json = await respnse.json();

        if (respnse.ok) {
            setIsLoading(false);
            setError(null);
            dispatch({ type: "ADD_VEHICLE", payload: json });
        }

        if (!respnse.ok) {
            setIsLoading(false);
            setError(json.error);
        }
    };

    return { addVehicle, error, isLoading };
};

export default useAddVehicle;
