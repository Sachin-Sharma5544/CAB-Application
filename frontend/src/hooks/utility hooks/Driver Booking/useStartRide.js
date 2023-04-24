import React from "react";
import { useState } from "react";
import useDriverBookingContext from "../../context hooks/Driver Booking/useDriverBookingContext";
import useDriverAuthContext from "../../context hooks/Authentication/useDriverAuthContext";

const useStartRide = (drivBookings) => {
    const [error, setError] = useState();
    const { dispatch } = useDriverBookingContext();
    const { user: drivUser } = useDriverAuthContext();

    const rideStart = "Ongoing Ride";

    const startRideForBooking = async (id) => {
        const response = await fetch("http://localhost:3501/ride/start/" + id, {
            method: "POST",
            body: JSON.stringify({ rideStart: rideStart }),
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
            const updateStartBooking = [...drivBookings];
            const startBookingIndex = updateStartBooking.findIndex(
                (ride) => ride._id === id
            );

            if (startBookingIndex === -1)
                return setError(
                    " Ride your are trying to cancel doesn't exist"
                );

            const startBooking = updateStartBooking[startBookingIndex];

            if (startBooking.rideStatus === rideStart) {
                return setError(" Ride is already started");
            }

            startBooking.rideStatus = rideStart;
            updateStartBooking[startBookingIndex] = startBooking;

            dispatch({ type: "START_BOOKING", payload: updateStartBooking });
        }
    };

    return { startRideForBooking, error };
};

export default useStartRide;
