import React, { useEffect, useState } from "react";
import useDriverBookingContext from "../../context hooks/Driver Booking/useDriverBookingContext";
import useDriverAuthContext from "../../context hooks/Authentication/useDriverAuthContext";

const useFetchBookings = (dispatch) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { user: drivUser } = useDriverAuthContext();

    useEffect(() => {
        const fetchBookingDetails = async () => {
            const response = await fetch("http://localhost:3501/bookings", {
                headers: {
                    Authorization: `Bearer ${drivUser.token}`,
                },
            });

            const json = await response.json();

            if (!response.ok) {
                setIsLoading(false);
                setError(json.error);
            }

            if (response.ok) {
                setIsLoading(false);
                setError(null);
                dispatch({ type: "SET_BOOKING", payload: json });
            }
        };

        fetchBookingDetails();
    });

    return { error, isLoading };
};

export default useFetchBookings;
