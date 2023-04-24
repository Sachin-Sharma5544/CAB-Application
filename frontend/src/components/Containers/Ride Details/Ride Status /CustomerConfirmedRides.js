import React from "react";
import { SimpleGrid, CircularProgress } from "@chakra-ui/react";
import RideCardComponent from "../../../Utility/Card/Customer Ride Card/RideCardComponent";

const CustomerConfirmedRides = (props) => {
    const { customerConfirmedRides, cancelRide, isLoading } = props;
    return (
        <>
            <h4> Your confirmed rides </h4>
            {customerConfirmedRides && customerConfirmedRides.length > 0 ? (
                <SimpleGrid
                    spacing={4}
                    templateColumns="repeat(auto-fill, minmax(310px, 1fr))"
                >
                    {customerConfirmedRides.map((ride) => (
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
        </>
    );
};

export default CustomerConfirmedRides;
