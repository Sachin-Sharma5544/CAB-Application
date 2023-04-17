import "./CustomerRideDetails.css";

import React from "react";

import { SimpleGrid } from "@chakra-ui/react";
import RideCardComponent from "../../Utility/Card/Customer Ride Card/RideCardComponent";

const CustomerRideDetails = () => {
    return (
        <div className="CustomerRideDetails__Page">
            <h1>Customer ride details</h1>

            <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(310px, 1fr))"
            >
                <RideCardComponent></RideCardComponent>
                <RideCardComponent></RideCardComponent>
                <RideCardComponent></RideCardComponent>
                <RideCardComponent></RideCardComponent>
                <RideCardComponent></RideCardComponent>
            </SimpleGrid>
        </div>
    );
};

export default CustomerRideDetails;
