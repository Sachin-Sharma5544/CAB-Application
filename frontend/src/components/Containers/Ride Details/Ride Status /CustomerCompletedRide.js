import React from "react";
import { SimpleGrid, CircularProgress } from "@chakra-ui/react";
import RideCardComponent from "../../../Utility/Card/Customer Ride Card/RideCardComponent";

const CustomerCompletedRides = (props) => {
    const { customerCompletedRides, cancelRide, isLoading } = props;
    return (
        <>
            <h4> Your completed rides </h4>
            {customerCompletedRides && customerCompletedRides.length > 0 ? (
                <SimpleGrid
                    spacing={4}
                    templateColumns="repeat(auto-fill, minmax(310px, 1fr))"
                >
                    {customerCompletedRides.map((ride) => (
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

export default CustomerCompletedRides;
