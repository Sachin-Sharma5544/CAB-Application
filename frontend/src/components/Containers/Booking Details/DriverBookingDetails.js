import React from "react";
import "./DriverBookingDetails.css";
import { useToast } from "@chakra-ui/react";
import useDriverBookingContext from "../../../hooks/context hooks/Driver Booking/useDriverBookingContext";
import useFetchBookings from "../../../hooks/utility hooks/Driver Booking/useFetchBookings";
import useDriverCancelBooking from "../../../hooks/utility hooks/Driver Booking/useDriverCancelBooking";
import useFilteredBooking from "../../../hooks/utility hooks/Driver Booking/useFilteredBooking";
import CustomerCancelledBookings from "./Booking Status/CustomerCancelledBookings";
import DriverCancelledBookings from "./Booking Status/DriverCancelledBookings";
import DriverCompletedBookings from "./Booking Status/DriverCompletedBookings";
import DriverConfirmedBookings from "./Booking Status/DriverConfirmedBookings";
import DriverCurrentBooking from "./Booking Status/DriverCurrentBookings";
import useStartRide from "../../../hooks/utility hooks/Driver Booking/useStartRide";
import useCompleteRide from "../../../hooks/utility hooks/Driver Booking/useCompleteRide";
import useSocketContext from "../../../hooks/context hooks/Socket/useSocketContext";

import useScoket from "../../../hooks/utility hooks/Socket/useScoket";
const DriverBookingDetails = () => {
    const { bookings, dispatch } = useDriverBookingContext();
    const { error, isLoading } = useFetchBookings(dispatch);

    const { cancelDriverBooking } = useDriverCancelBooking(bookings);
    const { startRideForBooking: startRide } = useStartRide(bookings);

    const { endBooking } = useCompleteRide(bookings);

    useScoket();
    const { socket } = useSocketContext();

    const {
        driverCancelledBookings,
        customerCancelledBookings,
        confirmedBookings,
        ongoingBooking,
        completedBookings,
    } = useFilteredBooking(bookings || []);

    const toast = useToast();

    const cancelBooking = async (id) => {
        await cancelDriverBooking(id);
    };

    const startRideForBooking = async (id) => {
        await startRide(id);
    };

    const stopRide = async (id) => {
        await endBooking(id);
    };

    socket.on("NewDriverBooking", (data) => {
        dispatch({ type: "SET_BOOKING", payload: data });
        toast({
            title: "You have new booking! please check your booking details",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
        });
    });

    socket.on("CancelledBookingForDriver", (data) => {
        dispatch({ type: "SET_BOOKING", payload: data });
        toast({
            title: "Sorry!! Your ride has been cancelled by driver",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
        });
    });

    return (
        <div className="DriverBookingDetails__Page">
            <h1>Driver booking details</h1>

            {ongoingBooking.length > 0 && (
                <DriverCurrentBooking
                    driverCurrentBookings={ongoingBooking}
                    cancelBooking={cancelBooking}
                    isLoading={isLoading}
                    stopRide={stopRide}
                />
            )}

            {confirmedBookings.length > 0 && (
                <DriverConfirmedBookings
                    driverConfirmedBookings={confirmedBookings}
                    cancelBooking={cancelBooking}
                    isLoading={isLoading}
                    startRideForBooking={startRideForBooking}
                />
            )}

            {completedBookings.length > 0 && (
                <DriverCompletedBookings
                    driverCompletedBookings={completedBookings}
                    cancelBooking={cancelBooking}
                    isLoading={isLoading}
                />
            )}

            {customerCancelledBookings.length > 0 && (
                <CustomerCancelledBookings
                    customerCancelledBookings={customerCancelledBookings}
                    cancelBooking={cancelBooking}
                    isLoading={isLoading}
                />
            )}

            {driverCancelledBookings.length > 0 && (
                <DriverCancelledBookings
                    driverCancelledBookings={driverCancelledBookings}
                    cancelBooking={cancelBooking}
                    isLoading={isLoading}
                />
            )}

            {!ongoingBooking.length > 0 &&
                !driverCancelledBookings.length > 0 &&
                !customerCancelledBookings.length > 0 &&
                !confirmedBookings.length > 0 &&
                !completedBookings.length > 0 && (
                    <h5>You don't have any bookings to show. </h5>
                )}
        </div>
    );
};

export default DriverBookingDetails;
