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
        <Card border="1px solid black" boxShadow="2px 4px 7px rgba(0,0,0,0.5)">
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
                    <Text>
                        Vehicle Info: {ride.driverId.vehicleId.vehicleCompany},{" "}
                        {ride.driverId.vehicleId.vehicleColor},{" "}
                        {ride.driverId.vehicleId.vehicleNum}
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
            {ride.rideStatus !== "Customer Cancelled" &&
                ride.rideStatus !== "Driver Cancelled" &&
                ride.rideStatus !== "Ride Completed" && (
                    <CardFooter>
                        <Button onClick={() => props.cancelRide(ride._id)}>
                            Cancel Ride
                        </Button>
                    </CardFooter>
                )}
        </Card>
    );
};

export default RideCardComponent;
