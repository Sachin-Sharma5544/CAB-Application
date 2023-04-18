import useVehicleContext from "../../context hooks/Vehicle /useVehicleContext";

const useAddVehicle = () => {
    const { dispatch } = useVehicleContext();

    const addVehicle = async (company, vehType, number, rcNumber, color) => {
        const respnse = await fetch("http://localhost:3501/vehicle/new", {
            method: "POST",
            body: JSON.stringify({ company, vehType, number, rcNumber, color }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await respnse.json();

        if (respnse.ok) {
            dispatch({ type: "ADD_VEHICLE", payload: json });
        }
    };

    return { addVehicle };
};

export default useAddVehicle;
