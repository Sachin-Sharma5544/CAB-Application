import "./CustomerRideDetails.css";

import React, { useEffect, useState } from "react";

import { SimpleGrid, CircularProgress } from "@chakra-ui/react";
import RideCardComponent from "../../Utility/Card/Customer Ride Card/RideCardComponent";
import useCustomerAuthContext from "../../../hooks/context hooks/Authentication/useCustomerAuthContext";
import useCustomerRideContext from "../../../hooks/context hooks/Customer Ride/useCustomerRideContext";
import useFetchRides from "../../../hooks/utility hooks/Customer Ride/useFetchRides";

const CustomerRideDetails = () => {
    const { ride: customerRides, dispatch } = useCustomerRideContext();
    const { error, isLoading } = useFetchRides(dispatch);

    const cancelRide = (id) => {
        console.log(id, "customer ride details");
    };

    return (
        <div className="CustomerRideDetails__Page">
            <h1>Customer ride details</h1>
            {!customerRides && <p>You don't have any rides to show</p>}

            {customerRides && (
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
                    {/* <RideCardComponent></RideCardComponent>
                    <RideCardComponent></RideCardComponent>
                    <RideCardComponent></RideCardComponent>
                    <RideCardComponent></RideCardComponent>
                    <RideCardComponent></RideCardComponent> */}
                </SimpleGrid>
            )}
            {isLoading && (
                <CircularProgress isIndeterminate color="green.300" />
            )}
        </div>
    );
};

export default CustomerRideDetails;
