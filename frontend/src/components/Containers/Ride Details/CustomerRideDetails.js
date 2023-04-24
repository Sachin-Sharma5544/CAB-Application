import "./CustomerRideDetails.css";
import useCustomerRideContext from "../../../hooks/context hooks/Customer Ride/useCustomerRideContext";
import useFetchRides from "../../../hooks/utility hooks/Customer Ride/useFetchRides";
import useCustomerCancelRide from "../../../hooks/utility hooks/Customer Ride/useCustomerCancelRide";
import useFilteredRides from "../../../hooks/utility hooks/Customer Ride/useFilteredRides";
import DriverCancelledRides from "./Ride Status /DriverCancelledRides";
import CustomerCancelledRides from "./Ride Status /CustomerCancelledRides";
import CustomerConfirmedRides from "./Ride Status /CustomerConfirmedRides";
import CustomerCompletedRides from "./Ride Status /CustomerCompletedRide";
import CustomerCurrentRides from "./Ride Status /CustomerCurrentRide";

const CustomerRideDetails = () => {
    const { ride: customerRides, dispatch } = useCustomerRideContext();
    const { error, isLoading } = useFetchRides(dispatch);

    const { cancelCustRide } = useCustomerCancelRide(customerRides);
    const {
        driverCancelledRides,
        customerCancelledRides,
        confirmedRides,
        ongoingRide,
        completedRide,
    } = useFilteredRides(customerRides || []);

    console.log(customerRides);

    const cancelRide = async (id) => {
        console.log(id, "customer ride details");
        await cancelCustRide(id);
    };

    return (
        <div className="CustomerRideDetails__Page">
            <h1>Your ride details</h1>

            {ongoingRide.length > 0 && (
                <CustomerCurrentRides
                    customerCurrentRides={ongoingRide}
                    cancelRide={cancelRide}
                    isLoading={isLoading}
                />
            )}

            {confirmedRides.length > 0 && (
                <CustomerConfirmedRides
                    customerConfirmedRides={confirmedRides}
                    cancelRide={cancelRide}
                    isLoading={isLoading}
                />
            )}

            {completedRide.length > 0 && (
                <CustomerCompletedRides
                    customerCompletedRides={completedRide}
                    cancelRide={cancelRide}
                    isLoading={isLoading}
                />
            )}

            {customerCancelledRides.length > 0 && (
                <CustomerCancelledRides
                    customerCancelledRides={customerCancelledRides}
                    cancelRide={cancelRide}
                    isLoading={isLoading}
                />
            )}

            {driverCancelledRides.length > 0 && (
                <DriverCancelledRides
                    driverCancelledRides={driverCancelledRides}
                    cancelRide={cancelRide}
                    isLoading={isLoading}
                />
            )}

            {!ongoingRide.length > 0 &&
                !driverCancelledRides.length > 0 &&
                !customerCancelledRides.length > 0 &&
                !confirmedRides.length > 0 &&
                !completedRide.length > 0 && (
                    <h5>You don't have any bookings to show. </h5>
                )}
        </div>
    );
};

export default CustomerRideDetails;
