import React, { useState } from "react";
import "./DriverBookingDetails.css";
import { SimpleGrid } from "@chakra-ui/react";
import BookingCardComponent from "../../Utility/Card/Driver Booking Card/BookingCardComponent";
import useDriverBookingContext from "../../../hooks/context hooks/Driver Booking/useDriverBookingContext";
import useFetchBookings from "../../../hooks/utility hooks/Driver Booking/useFetchBookings";
import useDriverCancelBooking from "../../../hooks/utility hooks/Driver Booking/useDriverCancelBooking";
import useFilteredBooking from "../../../hooks/utility hooks/Driver Booking/useFilteredBooking";
import CustomerCancelledBookings from "./Booking Status/CustomerCancelledBookings";
import DriverCancelledBookings from "./Booking Status/DriverCancelledBookings";
import DriverCompletedBookings from "./Booking Status/DriverCompletedBookings";
import DriverConfirmedBookings from "./Booking Status/DriverConfirmedBookings";
import DriverCurrentBooking from "./Booking Status/DriverCurrentBookings";

const DriverBookingDetails = () => {
    const { bookings, dispatch } = useDriverBookingContext();
    const { error, isLoading } = useFetchBookings(dispatch);

    const { cancelDriverBooking } = useDriverCancelBooking(bookings);
    const {
        driverCancelledBookings,
        customerCancelledBookings,
        confirmedBookings,
        ongoingBooking,
        completedBookings,
    } = useFilteredBooking(bookings || []);

    const cancelBooking = async (id) => {
        console.log(id);
        await cancelDriverBooking(id);
    };

    return (
        <div className="DriverBookingDetails__Page">
            <h1>Driver booking details</h1>

            {ongoingBooking.length > 0 && (
                <DriverCurrentBooking
                    driverCurrentBookings={ongoingBooking}
                    cancelBooking={cancelBooking}
                    isLoading={isLoading}
                />
            )}

            {confirmedBookings.length > 0 && (
                <DriverConfirmedBookings
                    driverConfirmedBookings={confirmedBookings}
                    cancelBooking={cancelBooking}
                    isLoading={isLoading}
                />
            )}

            {completedBookings.length > 0 && (
                <DriverCompletedBookings
                    driverCompletedBookings={completedBookings}
                    cancelBooking={cancelBooking}
                    isLoading={isLoading}
                />
            )}

            {customerCancelledBookings.length > 0 && (
                <CustomerCancelledBookings
                    customerCancelledBookings={customerCancelledBookings}
                    cancelBooking={cancelBooking}
                    isLoading={isLoading}
                />
            )}

            {driverCancelledBookings.length > 0 && (
                <DriverCancelledBookings
                    driverCancelledBookings={driverCancelledBookings}
                    cancelBooking={cancelBooking}
                    isLoading={isLoading}
                />
            )}

            {/* {!ongoingRide.length > 0 &&
                !driverCancelledRides.length > 0 &&
                !customerCancelledRides.length > 0 &&
                !confirmedRides.length > 0 &&
                !completedRide.length > 0 && (
                    <h5>You don't have any bookings to show. </h5>
                )} */}
        </div>
    );
};

export default DriverBookingDetails;
