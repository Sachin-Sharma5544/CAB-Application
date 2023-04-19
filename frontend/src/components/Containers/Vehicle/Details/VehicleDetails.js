import React, { useEffect } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    Flex,
    Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import VehicleDetailRowComponent from "./Single Row/VehicleDetailSingleComponent";
import useFetchVehicle from "../../../../hooks/utility hooks/Vehicle/useFetchVehicle";
import useVehicleContext from "../../../../hooks/context hooks/Vehicle /useVehicleContext";
import useDeleteVehicle from "../../../../hooks/utility hooks/Vehicle/useDeleteVehicle";

const VehicleDetails = () => {
    const { vehicle, dispatch } = useVehicleContext();
    const { error, isLoading } = useFetchVehicle(dispatch);
    const { deleteVehicle } = useDeleteVehicle();

    useEffect(() => {
        console.log("Vehicle data has changed", vehicle);
    }, [vehicle]);

    const deleteVehiclehandler = async (id) => {
        console.log(id);
        await deleteVehicle(id);
    };

    return (
        <div className="VehicleDetails">
            {!error && (
                <>
                    <h1>Vehicle Details</h1>

                    <TableContainer>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Company</Th>
                                    <Th>Vehicle Type</Th>
                                    <Th>Number</Th>
                                    <Th>RC number</Th>
                                    <Th>Colour</Th>
                                    <Th>Delete</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {!isLoading &&
                                    vehicle.map((veh) => (
                                        <VehicleDetailRowComponent
                                            key={veh._id}
                                            vehicle={veh}
                                            deleteVehiclehandler={
                                                deleteVehiclehandler
                                            }
                                        ></VehicleDetailRowComponent>
                                    ))}
                            </Tbody>
                        </Table>
                    </TableContainer>

                    <Flex pb={10}>
                        <Button
                            size="md"
                            mt={2}
                            mx={2}
                            backgroundColor="orange.700"
                            color="white"
                            as={Link}
                            to="/driver/vehicle/new"
                        >
                            Add New
                        </Button>
                    </Flex>
                </>
            )}

            {error && <h2>{error}</h2>}
        </div>
    );
};

export default VehicleDetails;
