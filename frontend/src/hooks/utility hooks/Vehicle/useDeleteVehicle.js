import React from "react";
import useVehicleContext from "../../context hooks/Vehicle /useVehicleContext";
import useDriverAuthContext from "../../context hooks/Authentication/useDriverAuthContext";

const useDeleteVehicle = () => {
    const { dispatch } = useVehicleContext();
    const { user } = useDriverAuthContext();

    const deleteVehicle = async (id) => {
        const response = await fetch("http://localhost:3501/vehicle/" + id, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${user.token}`,
            },
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: "DELETE_VEHICLE", payload: json });
        }
    };
    return { deleteVehicle };
};

export default useDeleteVehicle;
