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
    Grid,
    GridItem,
} from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";

const BookingCardComponent = (props) => {
    const { booking } = props;
    return (
        <Card border="1px solid black">
            <CardHeader>
                <Heading size="md"> Booking Details </Heading>
            </CardHeader>
            <CardBody>
                <Box>
                    <Text>Pickup Location: {booking.pickupLocation}</Text>
                </Box>
                <Box>
                    <Text>Drop Location: {booking.dropLocation}</Text>
                </Box>
                <Box>
                    <Text>
                        Customer Name: {booking.customer.firstName}{" "}
                        {booking.customer.lastName}
                    </Text>
                </Box>
                <Box>
                    <Text>Status: {booking.rideStatus}</Text>
                </Box>
                <Box>
                    <Text>
                        Date:{" "}
                        {formatDistanceToNow(new Date(booking.createdAt), {
                            addSuffix: true,
                        })}
                    </Text>
                </Box>
            </CardBody>
            {booking.rideStatus !== "Customer Cancelled" &&
                booking.rideStatus !== "Driver Cancelled" && (
                    <CardFooter>
                        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
                            <GridItem>
                                <Button>Start Ride</Button>
                            </GridItem>
                            <GridItem>
                                <Button
                                    onClick={() =>
                                        props.cancelBooking(booking._id)
                                    }
                                >
                                    Cancel Ride
                                </Button>
                            </GridItem>
                        </Grid>
                    </CardFooter>
                )}
        </Card>
    );
};

export default BookingCardComponent;
