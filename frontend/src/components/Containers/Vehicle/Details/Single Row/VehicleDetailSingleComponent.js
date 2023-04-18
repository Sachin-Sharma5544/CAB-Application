import React from "react";
import { Tr, Td, Button, Text } from "@chakra-ui/react";

const VehicleDetailRowComponent = (props) => {
    return (
        <Tr>
            <Td>
                <Text>{props.vehicle.vehicleCompany}</Text>
            </Td>

            <Td>
                <Text>{props.vehicle.vehicleType}</Text>
            </Td>

            <Td>
                <Text>{props.vehicle.vehicleNum}</Text>
            </Td>

            <Td>
                <Text>{props.vehicle.regCertNum}</Text>
            </Td>

            <Td>
                <Text>{props.vehicle.vehicleColor}</Text>
            </Td>

            <Td>
                <Button
                    onClick={() =>
                        props.deleteVehiclehandler(props.vehicle._id)
                    }
                >
                    Delete
                </Button>
            </Td>
        </Tr>
    );
};

export default VehicleDetailRowComponent;
