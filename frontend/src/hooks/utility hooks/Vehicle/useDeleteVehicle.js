import React from "react";
import useVehicleContext from "../../context hooks/Vehicle /useVehicleContext";

const useDeleteVehicle = () => {
    const { dispatch } = useVehicleContext();

    const deleteVehicle = async (id) => {
        const response = await fetch("http://localhost:3501/vehicle/" + id, {
            method: "DELETE",
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: "DELETE_VEHICLE", payload: json });
        }
    };
    return { deleteVehicle };
};

export default useDeleteVehicle;
