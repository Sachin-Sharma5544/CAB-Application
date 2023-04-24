import React from "react";
import useCustomerRideContext from "../../context hooks/Customer Ride/useCustomerRideContext";

const useFilteredRides = (rides) => {
    // const { ride: bookings } = useCustomerRideContext();
    const driverCancelled = "Driver Cancelled";
    const customerCancelled = "Customer Cancelled";
    const bookingConfirmed = "Booking Confirmed";
    const currentRide = "Ongoing Ride";
    const doneRide = "Ride Completed";

    const driverCancelledRides = rides.filter(
        (booking) => booking.rideStatus === driverCancelled
    );

    const customerCancelledRides = rides.filter(
        (booking) => booking.rideStatus === customerCancelled
    );

    const ongoingRide = rides.filter(
        (booking) => booking.rideStatus === currentRide
    );

    const confirmedRides = rides.filter(
        (booking) => booking.rideStatus === bookingConfirmed
    );

    const completedRide = rides.filter(
        (booking) => booking.rideStatus === doneRide
    );

    return {
        driverCancelledRides,
        customerCancelledRides,
        confirmedRides,
        ongoingRide,
        completedRide,
    };
};

export default useFilteredRides;
