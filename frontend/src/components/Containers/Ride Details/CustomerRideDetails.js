import "./CustomerRideDetails.css";

import React, { useEffect, useState } from "react";

import { SimpleGrid, CircularProgress } from "@chakra-ui/react";
import RideCardComponent from "../../Utility/Card/Customer Ride Card/RideCardComponent";
import useCustomerAuthContext from "../../../hooks/context hooks/Authentication/useCustomerAuthContext";
import useCustomerRideContext from "../../../hooks/context hooks/Customer Ride/useCustomerRideContext";
import useFetchRides from "../../../hooks/utility hooks/Customer Ride/useFetchRides";
import useCustomerCancelRide from "../../../hooks/utility hooks/Customer Ride/useCustomerCancelRide";

const CustomerRideDetails = () => {
    const { ride: customerRides, dispatch } = useCustomerRideContext();
    const { error, isLoading } = useFetchRides(dispatch);

    const { cancelCustRide } = useCustomerCancelRide(customerRides);

    const cancelRide = async (id) => {
        console.log(id, "customer ride details");
        await cancelCustRide(id);
    };

    return (
        <div className="CustomerRideDetails__Page">
            <h1>Customer ride details</h1>

            {customerRides && customerRides.length > 0 ? (
                <SimpleGrid
                    spacing={4}
                    templateColumns="repeat(auto-fill, minmax(310px, 1fr))"
                >
                    {customerRides.map((ride) => (
                        <RideCardComponent
                            key={ride._id}
                            ride={ride}
                            cancelRide={cancelRide}
                        ></RideCardComponent>
                    ))}
                </SimpleGrid>
            ) : (
                <h5>You don't have any rides to show</h5>
            )}
            {isLoading && (
                <CircularProgress isIndeterminate color="green.300" />
            )}
        </div>
    );
};

export default CustomerRideDetails;
