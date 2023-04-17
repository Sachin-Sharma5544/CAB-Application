import React from "react";
import "./DriverBookingDetails.css";
import { SimpleGrid } from "@chakra-ui/react";
import BookingCardComponent from "../../Utility/Card/Driver Booking Card/BookingCardComponent";

const DriverBookingDetails = () => {
    return (
        <div className="DriverBookingDetails__Page">
            <h1>Driver booking details</h1>
            <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(310px, 1fr))"
            >
                <BookingCardComponent></BookingCardComponent>
            </SimpleGrid>
        </div>
    );
};

export default DriverBookingDetails;
