import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Input,
    Select,
} from "@chakra-ui/react";

const AddVehicleForm = (props) => {
    return (
        <TableContainer>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Company</Th>
                        <Th>Vehicle Type</Th>
                        <Th>Number</Th>
                        <Th>RC number</Th>
                        <Th>Colour</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Input
                                value={props.company}
                                onChange={(e) =>
                                    props.setCompany(e.target.value)
                                }
                            />
                        </Td>

                        <Td>
                            <Select
                                value={props.vehicleType}
                                onChange={(e) =>
                                    props.setVehicleType(e.target.value)
                                }
                            >
                                <option value="select">
                                    Select Vehicle Type
                                </option>
                                <option value="car">Car</option>
                                <option value="bike">Bike</option>
                                <option value="auto">Auto</option>
                            </Select>
                        </Td>

                        <Td>
                            <Input
                                value={props.number}
                                onChange={(e) =>
                                    props.setNumber(e.target.value)
                                }
                            />
                        </Td>

                        <Td>
                            <Input
                                value={props.rcNumber}
                                onChange={(e) =>
                                    props.setRcNumber(e.target.value)
                                }
                            />
                        </Td>

                        <Td>
                            <Input
                                value={props.colour}
                                onChange={(e) =>
                                    props.setColour(e.target.value)
                                }
                            />
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default AddVehicleForm;
