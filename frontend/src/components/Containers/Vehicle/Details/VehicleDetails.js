import React from "react";

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Button,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const VehicleDetails = () => {
    return (
        <div className="VehicleDetails">
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
                        <Tr>
                            <Td>
                                <Text>Hello</Text>
                            </Td>

                            <Td>
                                <Text>Hello</Text>
                            </Td>

                            <Td>
                                <Text>Hello</Text>
                            </Td>

                            <Td>
                                <Text>Hello</Text>
                            </Td>

                            <Td>
                                <Text>Hello</Text>
                            </Td>

                            <Td>
                                <Button>Delete</Button>
                            </Td>
                        </Tr>
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
        </div>
    );
};

export default VehicleDetails;
