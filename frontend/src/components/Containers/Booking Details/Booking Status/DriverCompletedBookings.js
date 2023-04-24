import React from "react";
import { SimpleGrid, CircularProgress } from "@chakra-ui/react";
import BookingCardComponent from "../../../Utility/Card/Driver Booking Card/BookingCardComponent";

const DriverCompletedBookings = (props) => {
    const { driverCompletedBookings, cancelBooking, isLoading } = props;
    return (
        <>
            <h4> Your completed bookings </h4>
            {driverCompletedBookings && driverCompletedBookings.length > 0 ? (
                <SimpleGrid
                    spacing={4}
                    templateColumns="repeat(auto-fill, minmax(310px, 1fr))"
                >
                    {driverCompletedBookings.map((booking) => (
                        <BookingCardComponent
                            key={booking._id}
                            booking={booking}
                            cancelBooking={cancelBooking}
                        ></BookingCardComponent>
                    ))}
                </SimpleGrid>
            ) : (
                <h5>You don't have any rides to show</h5>
            )}
            {isLoading && (
                <CircularProgress isIndeterminate color="green.300" />
            )}
        </>
    );
};

export default DriverCompletedBookings;
