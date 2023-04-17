const useFetchVehicle = () => {
    const fetchVehicles = async () => {
        const response = await fetch("http://localhost:3501/vehicle/");
        const json = await response.json();
        console.log(json);
    };

    return { fetchVehicles };
};

export default useFetchVehicle;
