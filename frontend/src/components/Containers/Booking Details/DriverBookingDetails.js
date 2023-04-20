import React from "react";
import "./DriverBookingDetails.css";
import { SimpleGrid } from "@chakra-ui/react";
import BookingCardComponent from "../../Utility/Card/Driver Booking Card/BookingCardComponent";
import useDriverBookingContext from "../../../hooks/context hooks/Driver Booking/useDriverBookingContext";
import useFetchBookings from "../../../hooks/utility hooks/Driver Booking/useFetchBookings";

const DriverBookingDetails = () => {
    const { bookings, dispatch } = useDriverBookingContext();
    const { error, isLoading } = useFetchBookings(dispatch);

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
