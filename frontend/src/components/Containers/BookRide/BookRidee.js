import "./BookRide.css";
import BoxContainer from "../../Hoc/BoxContainer";
import { Heading } from "@chakra-ui/react";
import RideForm from "./Ride Form/RideForm";
import GoogleMaps from "./Google Maps/GoogleMapss";
import { useState } from "react";
import useCurrentLocation from "../../../hooks/useCurrentLocation";

const pickupState = {
    name: "Pickup",
    type: "text",
    placeholder: "Pickup location",
    value: "",
};

const dropState = {
    name: "Drop",
    type: "text",
    placeholder: "Drop location",
    value: "",
};

const BookRide = (props) => {
    //Hooks import
    const { currPos } = useCurrentLocation();

    //State
    const [map, setMap] = useState(null);
    const [pickupLocation, setPickupLocation] = useState(pickupState);
    const [dropLocation, setDropLocation] = useState(dropState);
    const [pickupLocationAuto, setPickupLocationAuto] = useState("");
    const [dropLocationAuto, setDropLocationAuto] = useState("");
    const [displayMap, setDisplayMap] = useState(false);

    // const [directionsResponse, setDirectionsResponse] = useState(null);
    // const [distance, setDistance] = useState(null);
    // const [duration, setDuration] = useState(null);

    /* Handler Methods */

    //Calculate Route
    const calculateRoute = async () => {};

    //Re-Center map to current location
    const handleRecenter = () => {
        map.panTo(currPos);
    };

    // Pickup  change handler
    const pickupLocationChangeHandler = (e) => {
        const updatedPickupLocation = { ...pickupLocation };
        updatedPickupLocation.value = e.target.value;
        setPickupLocation(updatedPickupLocation);
    };

    // Destination change handler
    const dropLocationChangeHandler = (e) => {
        const updatedDropLocation = { ...dropLocation };
        updatedDropLocation.value = e.target.value;
        setDropLocation(updatedDropLocation);
    };

    const dropPlaceChangedHandler = () => {
        const updatedDropLocation = { ...dropLocation };

        try {
            if (!dropLocationAuto)
                throw Error("Drop location coordinates are not valid");
            const selectedPlace = dropLocationAuto.getPlace();
            updatedDropLocation.value = selectedPlace.formatted_address;
            console.log(selectedPlace);
            console.log(selectedPlace.geometry.location.lat());
            setDropLocation(updatedDropLocation);
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
            setPickupLocation(updatedPickupLocation);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSearchClick = () => {
        // const source = bookRideFields[0].value;
        // const destination = bookRideFields[1].value;
        // console.log(source, destination);
    };

    const handleBookRide = () => {
        console.log("Book ride button clicked");
    };

    return (
        <BoxContainer className="RideInfo__Wrapper">
            <BoxContainer className="RideInfo__Card">
                <BoxContainer className="RideInfo__CardContainer">
                    <Heading className="RideInfo__Header">
                        Smart Ride Details
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
