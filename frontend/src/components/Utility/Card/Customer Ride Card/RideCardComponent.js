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
const RideCardComponent = (props) => {
    const { ride } = props;
    return (
        <Card border="1px solid black">
            <CardHeader>
                <Heading size="md"> Ride Details </Heading>
            </CardHeader>
            <CardBody>
                <Box>
                    <Text>Pickup Location: {ride.pickupLocation}</Text>
                </Box>
                <Box>
                    <Text>Drop Location: {ride.dropLocation}</Text>
                </Box>
                <Box>
                    <Text>Driver Name:{ride.driverId}</Text>
                </Box>
                <Box>
                    <Text>Status: {ride.rideStatus}</Text>
                </Box>
                <Box>
                    <Text>Date: {ride.createdAt}</Text>
                </Box>
            </CardBody>
            <CardFooter>
                <Button>View here</Button>
            </CardFooter>
        </Card>
    );
};

export default RideCardComponent;
