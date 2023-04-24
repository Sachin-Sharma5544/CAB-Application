import React, { useState } from "react";
import useDriverAuthContext from "../../context hooks/Authentication/useDriverAuthContext";
import useDriverBookingContext from "../../context hooks/Driver Booking/useDriverBookingContext";

const useDriverCancelBooking = (drivBookings) => {
    const [error, setError] = useState();
    const { dispatch } = useDriverBookingContext();
    const { user: drivUser } = useDriverAuthContext();

    const cancelledBy = "Driver Cancelled";
    const alreadyCancelled = "Customer Cancelled";

    const cancelDriverBooking = async (id) => {
        const response = await fetch(
            "http://localhost:3501/ride/cancel/" + id,
            {
                method: "POST",
                body: JSON.stringify({ cancelledBy: cancelledBy }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${drivUser.token}`,
                },
            }
        );

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }

        if (response.ok) {
            const updateCancelBooking = [...drivBookings];
            const cancelBookingIndex = updateCancelBooking.findIndex(
                (ride) => ride._id === id
            );

            if (cancelBookingIndex === -1)
                return setError(
                    " Ride your are trying to cancel doesn't exist"
                );

            const cancelBooking = updateCancelBooking[cancelBookingIndex];

            if (
                cancelBooking.rideStatus === alreadyCancelled ||
                cancelBooking.rideStatus === cancelledBy
            ) {
                return setError(" Ride is already cancelled. ");
            }

            cancelBooking.rideStatus = cancelledBy;
            updateCancelBooking[cancelBookingIndex] = cancelBooking;

            dispatch({ type: "CANCEL_BOOKING", payload: updateCancelBooking });
        }
    };

    return { cancelDriverBooking, error };
};

export default useDriverCancelBooking;
