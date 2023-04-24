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
import { formatDistanceToNow } from "date-fns";

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
                    <Text>
                        Driver Name: {ride.driverId.firstName}{" "}
                        {ride.driverId.lastName}
                    </Text>
                </Box>
                <Box>
                    <Text>Status: {ride.rideStatus}</Text>
                </Box>
                <Box>
                    <Text>
                        Date:{" "}
                        {formatDistanceToNow(new Date(ride.createdAt), {
                            addSuffix: true,
                        })}
                    </Text>
                </Box>
            </CardBody>
            <CardFooter>
                {ride.rideStatus !== "Customer Cancelled" && (
                    <Button onClick={() => props.cancelRide(ride._id)}>
                        Cancel Ride
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};

export default RideCardComponent;
