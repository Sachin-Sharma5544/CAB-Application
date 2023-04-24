import React from "react";
import { SimpleGrid, CircularProgress } from "@chakra-ui/react";
import BookingCardComponent from "../../../Utility/Card/Driver Booking Card/BookingCardComponent";

const DriverConfirmedBookings = (props) => {
    const {
        driverConfirmedBookings,
        cancelBooking,
        isLoading,
        startRideForBooking,
    } = props;
    return (
        <>
            <h4> Your confirmed bookings </h4>
            {driverConfirmedBookings && driverConfirmedBookings.length > 0 ? (
                <SimpleGrid
                    spacing={4}
                    templateColumns="repeat(auto-fill, minmax(310px, 1fr))"
                >
                    {driverConfirmedBookings.map((booking) => (
                        <BookingCardComponent
                            key={booking._id}
                            booking={booking}
                            cancelBooking={cancelBooking}
                            startRideForBooking={startRideForBooking}
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

export default DriverConfirmedBookings;
