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
            <CardFooter>
                <Button>View here</Button>
            </CardFooter>
        </Card>
    );
};

export default BookingCardComponent;
