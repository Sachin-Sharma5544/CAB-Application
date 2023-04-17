const useAddVehicle = () => {
    const addVehicle = async (company, vehType, number, rcNumber, color) => {
        const respnse = await fetch("http://localhost:3501/vehicle/new", {
            method: "POST",
            body: JSON.stringify({ company, vehType, number, rcNumber, color }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await respnse.json();
        console.log(json);
    };

    return { addVehicle };
};

export default useAddVehicle;
