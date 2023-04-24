import React from "react";
import { SimpleGrid, CircularProgress } from "@chakra-ui/react";
import BookingCardComponent from "../../../Utility/Card/Driver Booking Card/BookingCardComponent";

const DriverCurrentBooking = (props) => {
    const { driverCurrentBookings, cancelBooking, isLoading, stopRide } = props;
    return (
        <>
            <h4> Your current bookings</h4>
            {driverCurrentBookings && driverCurrentBookings.length > 0 ? (
                <SimpleGrid
                    spacing={4}
                    templateColumns="repeat(auto-fill, minmax(310px, 1fr))"
                >
                    {driverCurrentBookings.map((booking) => (
                        <BookingCardComponent
                            key={booking._id}
                            booking={booking}
                            cancelBooking={cancelBooking}
                            stopRide={stopRide}
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

export default DriverCurrentBooking;
