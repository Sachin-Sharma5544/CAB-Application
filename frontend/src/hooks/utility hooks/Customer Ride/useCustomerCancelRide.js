import React, { useState } from "react";
import useCustomerRideContext from "../../context hooks/Customer Ride/useCustomerRideContext";
import useCustomerAuthContext from "../../context hooks/Authentication/useCustomerAuthContext";

const useCustomerCancelRide = (custRides) => {
    const [error, setError] = useState();
    const { dispatch } = useCustomerRideContext();
    const { user: custUser } = useCustomerAuthContext();
    const cancelledBy = "Customer Cancelled";
    const alreadyCancelled = "Driver Cancelled";

    const cancelCustRide = async (id) => {
        const response = await fetch(
            "http://localhost:3501/ride/cancel/" + id,
            {
                method: "POST",
                body: JSON.stringify({ cancelledBy: cancelledBy }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${custUser.token}`,
                },
            }
        );
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }

        if (response.ok) {
            const updateCancelRide = [...custRides];
            const cancelRideIndex = updateCancelRide.findIndex(
                (ride) => ride._id === id
            );

            if (cancelRideIndex === -1)
                return setError(
                    " Ride your are trying to cancel doesn't exist"
                );

            const cancelRide = updateCancelRide[cancelRideIndex];

            if (
                cancelRide.rideStatus === cancelledBy ||
                cancelRide.rideStatus === alreadyCancelled
            ) {
                return setError(" Ride is already cancelled. ");
            }

            cancelRide.rideStatus = cancelledBy;
            updateCancelRide[cancelRideIndex] = cancelRide;

            dispatch({ type: "CANCEL_RIDE", payload: updateCancelRide });
        }

        // console.log(json);
    };

    return { cancelCustRide, error };
};
export default useCustomerCancelRide;
