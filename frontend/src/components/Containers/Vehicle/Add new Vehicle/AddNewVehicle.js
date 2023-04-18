import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
import AddVehicleForm from "../../../Utility/Forms/Add Vehicle/AddVehicleForm";
import useAddVehicle from "../../../../hooks/utility hooks/Vehicle/useAddVehicle";
import { useNavigate } from "react-router-dom";

const AddNewVehicle = () => {
    const [company, setCompany] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [number, setNumber] = useState("");
    const [rcNumber, setRcNumber] = useState("");
    const [colour, setColour] = useState("");

    const { addVehicle } = useAddVehicle();

    const navigate = useNavigate();

    const addVehicleHandler = async () => {
        console.log(company, vehicleType, number, rcNumber, colour);
        await addVehicle(company, vehicleType, number, rcNumber, colour);
        navigate("/driver/vehicle/details");
    };

    return (
        <div className="AddNewVehicle">
            <h1>Add New Vehicle</h1>
            <AddVehicleForm
                company={company}
                vehicleType={vehicleType}
                number={number}
                rcNumber={rcNumber}
                colour={colour}
                setCompany={setCompany}
                setVehicleType={setVehicleType}
                setNumber={setNumber}
                setRcNumber={setRcNumber}
                setColour={setColour}
            />
            <Flex pb={10}>
                <Button
                    size="md"
                    mt={2}
                    mx={2}
                    backgroundColor="orange.700"
                    color="white"
                    as={Link}
                    to="/driver/vehicle/new"
                    onClick={addVehicleHandler}
                >
                    Add Vehicle
                </Button>
            </Flex>
        </div>
    );
};

export default AddNewVehicle;
