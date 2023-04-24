import React from "react";
import useCustomerRideContext from "../../context hooks/Customer Ride/useCustomerRideContext";

const useFilteredBooking = (bookings) => {
    console.log(bookings);
    const driverCancelled = "Driver Cancelled";
    const customerCancelled = "Customer Cancelled";
    const bookingConfirmed = "Booking Confirmed";
    const currentBooking = "Ongoing Ride";
    const doneBooking = "Ride Completed";
    const driverCancelledBookings = bookings.filter(
        (booking) => booking.rideStatus === driverCancelled
    );
    const customerCancelledBookings = bookings.filter(
        (booking) => booking.rideStatus === customerCancelled
    );
    const ongoingBooking = bookings.filter(
        (booking) => booking.rideStatus === currentBooking
    );
    const confirmedBookings = bookings.filter(
        (booking) => booking.rideStatus === bookingConfirmed
    );
    const completedBookings = bookings.filter(
        (booking) => booking.rideStatus === doneBooking
    );
    return {
        driverCancelledBookings,
        customerCancelledBookings,
        confirmedBookings,
        ongoingBooking,
        completedBookings,
    };
};

export default useFilteredBooking;
