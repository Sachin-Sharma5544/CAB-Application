import React from "react";
import {
    Card,
    CardHeader,
    Heading,
    CardBody,
    CardFooter,
    Text,
    Button,
    Box,
} from "@chakra-ui/react";
const RideCardComponent = () => {
    return (
        <Card border="1px solid black">
            <CardHeader>
                <Heading size="md"> Ride Details </Heading>
            </CardHeader>
            <CardBody>
                <Box>
                    <Text>Pickup Location: Karampura</Text>
                </Box>
                <Box>
                    <Text>Drop Location: Terminal 3, Delhi Airport </Text>
                </Box>
                <Box>
                    <Text>Driver: Samar Gupta</Text>
                </Box>
                <Box>
                    <Text>Status: Completed</Text>
                </Box>
                <Box>
                    <Text>Date: 13 Jan 2020</Text>
                </Box>
            </CardBody>
            <CardFooter>
                <Button>View here</Button>
            </CardFooter>
        </Card>
    );
};

export default RideCardComponent;
