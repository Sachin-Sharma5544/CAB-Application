import React, { useState } from "react";
import useDriverBookingContext from "../../context hooks/Driver Booking/useDriverBookingContext";
import useDriverAuthContext from "../../context hooks/Authentication/useDriverAuthContext";

const useCompleteRide = (drivBookings) => {
    const [error, setError] = useState();
    const { dispatch } = useDriverBookingContext();
    const { user: drivUser } = useDriverAuthContext();

    const rideComplete = "Ride Completed";

    const endBooking = async (id) => {
        const response = await fetch("http://localhost:3501/ride/end/" + id, {
            method: "POST",
            body: JSON.stringify({ rideComplete: rideComplete }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${drivUser.token}`,
            },
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }

        if (response.ok) {
            const updateEndBooking = [...drivBookings];
            const endBookingIndex = updateEndBooking.findIndex(
                (ride) => ride._id === id
            );

            if (endBookingIndex === -1)
                return setError(
                    " Ride your are trying to cancel doesn't exist"
                );

            const endBooking = updateEndBooking[endBookingIndex];

            if (endBooking.rideStatus === rideComplete) {
                return setError(" Ride is already started");
            }

            endBooking.rideStatus = rideComplete;
            updateEndBooking[endBookingIndex] = endBooking;

            dispatch({ type: "END_BOOKING", payload: updateEndBooking });
        }
    };

    // const endBooking = async (id) => {
    //     const updateEndBooking = [...drivBookings];
    //     const endBookingIndex = updateEndBooking.findIndex(
    //         (ride) => ride._id === id
    //     );

    //     if (endBookingIndex === -1)
    //         return setError(" Ride your are trying to cancel doesn't exist");

    //     const endBooking = updateEndBooking[endBookingIndex];

    //     if (endBooking.rideStatus === rideComplete) {
    //         return setError(" Ride is already started");
    //     }

    //     endBooking.rideStatus = rideComplete;
    //     updateEndBooking[endBookingIndex] = endBooking;

    //     dispatch({ type: "END_BOOKING", payload: updateEndBooking });
    // };

    return { endBooking, error };
};

export default useCompleteRide;
