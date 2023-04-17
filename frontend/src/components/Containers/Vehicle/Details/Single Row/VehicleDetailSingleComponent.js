import React from "react";
import { Tr, Td, Button, Text } from "@chakra-ui/react";

const VehicleDetailRowComponent = () => {
    return (
        <Tr>
            <Td>
                <Text>Hi</Text>
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
    );
};

export default VehicleDetailRowComponent;
