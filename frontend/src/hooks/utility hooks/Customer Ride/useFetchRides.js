import React, { useState, useEffect } from "react";
import useCustomerAuthContext from "../../context hooks/Authentication/useCustomerAuthContext";
import useCustomerRideContext from "../../context hooks/Customer Ride/useCustomerRideContext";

const useFetchRides = (dispatch) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { user: custUser } = useCustomerAuthContext();

    useEffect(() => {
        const fetchRideDetails = async () => {
            const response = await fetch("http://localhost:3501/ride", {
                headers: {
                    Authorization: `Bearer ${custUser.token}`,
                },
            });

            const json = await response.json();

            console.log(json);

            if (!response.ok) {
                setIsLoading(false);
                setError(json.error);
            }

            if (response.ok) {
                setIsLoading(false);
                setError(null);
                dispatch({ type: "SET_RIDE", payload: json });
            }
        };
        fetchRideDetails();
    }, []);

    return { isLoading, error };
};

export default useFetchRides;
