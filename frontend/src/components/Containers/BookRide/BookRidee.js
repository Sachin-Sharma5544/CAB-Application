import "./BookRide.css";
import BoxContainer from "../../HOC/BoxContainerComp";
import { Heading } from "@chakra-ui/react";
import RideForm from "./Ride Form/RideForm";
import GoogleMaps from "./Google Maps/GoogleMapss";
import { useState } from "react";
import useCurrentLocation from "../../../hooks/utility hooks/Location/useCurrentLocation";
import { useDropContext } from "../../../hooks/context hooks/Location/useDropContext";
import { usePickupContext } from "../../../hooks/context hooks/Location/usePickupContext";
import { useNavigate } from "react-router-dom";
import useCustomerAuthContext from "../../../hooks/context hooks/Authentication/useCustomerAuthContext";
import useWhatsApp from "../../../hooks/utility hooks/Whatsapp/useWhatsApp";
import useSearchCabs from "../../../hooks/utility hooks/Search Cabs/useSearchCabs";
import useCalculateRoute from "../../../hooks/utility hooks/Location/useCalculateRoute";

const pickupState = {
    name: "Pickup",
    type: "text",
    placeholder: "Pickup location",
    value: "",
    lat: null,
    lng: null,
};

const dropState = {
    name: "Drop",
    type: "text",
    placeholder: "Drop location",
    value: "",
    lat: null,
    lng: null,
};

const BookRide = (props) => {
    //Hooks import
    const { currPos } = useCurrentLocation();
    const { sendCustomerWhatsappMessage, sendDriverWhatsappMessage } =
        useWhatsApp();
    const { searchCabs } = useSearchCabs();

    //Context
    const { dispatch: dropDispatch } = useDropContext();
    const { dispatch: pickDispatch } = usePickupContext();
    const { user: custUser } = useCustomerAuthContext();

    //State
    const [map, setMap] = useState(null);
    const [pickupLocation, setPickupLocation] = useState(pickupState);
    const [dropLocation, setDropLocation] = useState(dropState);
    const [pickupLocationAuto, setPickupLocationAuto] = useState("");
    const [dropLocationAuto, setDropLocationAuto] = useState("");
    const [rideType, setRideType] = useState("");

    const [rideBookCnf, setRideBookCnf] = useState(null);
    const [rideBookErr, setRideBookErr] = useState(null);

    // const { distance, duration } = useCalculateRoute(
    //     pickupLocation,
    //     dropLocation
    // );

    // Navigate
    const navigate = useNavigate();

    /* Handler Methods */

    //Calculate Route

    //Re-Center map to current location
    const handleRecenter = () => {
        if (map) {
            map.panTo(currPos);
        }
    };

    //select rideType Handler
    const selectRidetypeHandler = (e) => {
        setRideType(e.target.value);
        setRideBookErr(null);
    };

    // Pickup  change handler
    const pickupLocationChangeHandler = (e) => {
        if (e.target.value === "") {
            pickDispatch({
                type: "CLEAR_PICKUP",
            });
        }
        const updatedPickupLocation = { ...pickupLocation };
        updatedPickupLocation.value = e.target.value;
        setPickupLocation(updatedPickupLocation);
        setRideBookErr(null);
    };

    // Destination change handler
    const dropLocationChangeHandler = (e) => {
        if (e.target.value === "") {
            dropDispatch({
                type: "CLEAR_DROP",
            });
        }
        const updatedDropLocation = { ...dropLocation };
        updatedDropLocation.value = e.target.value;
        setDropLocation(updatedDropLocation);
        setRideBookErr(null);
    };

    const dropPlaceChangedHandler = () => {
        const updatedDropLocation = { ...dropLocation };

        try {
            if (!dropLocationAuto)
                throw Error("Drop location coordinates are not valid");
            const selectedPlace = dropLocationAuto.getPlace();
            updatedDropLocation.value = selectedPlace.formatted_address;
            updatedDropLocation.lat = selectedPlace.geometry.location.lat();
            updatedDropLocation.lng = selectedPlace.geometry.location.lng();
            setDropLocation(updatedDropLocation);
            dropDispatch({
                type: "SET_DROP",
                payload: {
                    value: updatedDropLocation.value,
                    lat: updatedDropLocation.lat,
                    lng: updatedDropLocation.lng,
                },
            });
            setRideBookErr(null);
        } catch (error) {
            console.log(error.message);
        }
    };

    const pickupPlaceChangedHandler = () => {
        const updatedPickupLocation = { ...pickupLocation };
        try {
            if (!pickupLocationAuto)
                throw Error("Pickup location coordinates are not valid");
            const selectedPlace = pickupLocationAuto.getPlace();
            updatedPickupLocation.value = selectedPlace.formatted_address;
            updatedPickupLocation.lat = selectedPlace.geometry.location.lat();
            updatedPickupLocation.lng = selectedPlace.geometry.location.lng();
            setPickupLocation(updatedPickupLocation);
            console.log(updatedPickupLocation);
            pickDispatch({
                type: "SET_PICKUP",
                payload: {
                    value: updatedPickupLocation.value,
                    lat: updatedPickupLocation.lat,
                    lng: updatedPickupLocation.lng,
                },
            });
            setRideBookErr(null);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSearchClick = async () => {
        if (!pickupLocation.value === "" || dropLocation.value === "") {
            console.log("I am returning from here");
            return;
        }

        await searchCabs();
    };

    const handleBookRide = async () => {
        console.log("Book ride button clicked");
        console.log(pickupLocation, dropLocation, rideType);

        //This ensures customer user are allowed to book a ride
        if (!custUser) {
            console.log("Customer user not logged in");
            return navigate("/customer/login");
        }

        if (!pickupLocation.value === "" || dropLocation.value === "") {
            console.log("I am returning from here");
            return;
        }

        const response = await fetch("http://localhost:3501/ride/", {
            method: "POST",
            body: JSON.stringify({
                pickup: pickupLocation.value,
                drop: dropLocation.value,
                // distance: distance,
                rideType: rideType,
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${custUser.token}`,
            },
        });

        const json = await response.json();

        if (!response.ok) {
            setRideBookErr(json.error);
            sendCustomerWhatsappMessage();
        }

        if (response.ok) {
            sendCustomerWhatsappMessage();
            sendDriverWhatsappMessage();
            navigate("/ride/details");
        }
        console.log(json);
    };

    return (
        <BoxContainer className="RideInfo__Wrapper">
            <BoxContainer className="RideInfo__Card">
                <BoxContainer className="RideInfo__CardContainer">
                    <Heading className="RideInfo__Header">
                        Request for a ride now
                    </Heading>
                    <RideForm
                        pickupLocation={pickupLocation}
                        dropLocation={dropLocation}
                        handleRecenter={handleRecenter}
                        handleSearchClick={handleSearchClick}
                        pickupLocationChangeHandler={
                            pickupLocationChangeHandler
                        }
                        dropLocationChangeHandler={dropLocationChangeHandler}
                        handleBookRide={handleBookRide}
                        setPickupLocationAuto={setPickupLocationAuto}
                        setDropLocationAuto={setDropLocationAuto}
                        dropPlaceChangedHandler={dropPlaceChangedHandler}
                        pickupPlaceChangedHandler={pickupPlaceChangedHandler}
                        selectRidetypeHandler={selectRidetypeHandler}
                        rideBookErr={rideBookErr}
                    ></RideForm>
                </BoxContainer>
            </BoxContainer>

            {(pickupLocation.value || dropLocation.value) && (
                <BoxContainer className="RideInfo__Map">
                    <GoogleMaps setMap={setMap}></GoogleMaps>
                </BoxContainer>
            )}
        </BoxContainer>
    );
};

export default BookRide;
