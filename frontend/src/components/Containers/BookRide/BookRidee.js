import "./BookRide.css";
import BoxContainer from "../../Hoc/BoxContainer";
import { Heading } from "@chakra-ui/react";
import RideForm from "./Ride Form/RideForm";
import GoogleMaps from "./Google Maps/GoogleMapss";
import { useState, useRef } from "react";
import useCurrentLocation from "../../../hooks/useCurrentLocation";

// const bookRideInitialState = [
//     { name: "Drop", type: "text", placeholder: "Drop location", value: "" },
//     {
//         name: "Pickup",
//         type: "text",
//         placeholder: "Pickup location",
//         value: "",
//     },
//     // {
//     //     name: "Ridetype",
//     //     type: "select",
//     //     placeholder: "Ride Type",
//     //     value: "",
//     // },
// ];

const BookRide = (props) => {
    //Hooks import
    const { currPos } = useCurrentLocation();
    // const [bookRideFields, setBookRideFields] = useState(bookRideInitialState);

    //State
    const [map, setMap] = useState(null);
    // const [autocomplete, setAutocomplete] = useState(null);
    const [pickupLocation, setPickupLocation] = useState("");
    const [dropLocation, setDropLocation] = useState("");
    const [pickupLocationAuto, setPickupLocationAuto] = useState("");
    const [dropLocationAuto, setDropLocationAuto] = useState("");

    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);

    // const autocomplete1 = window.autocomplete;

    /* Handler Methods */

    //Calculate Route
    const calculateRoute = async () => {};

    //Re-Center map to current location
    const handleRecenter = () => {
        map.panTo(currPos);
    };

    //will be triggered when autocomplete suggestion is implemented
    // const placeChangedHandler = (id) => {
    //     const newBookRideFields = [...bookRideFields];
    //     const selectedPlace = autocomplete1.getPlace();
    //     console.log(autocomplete1);
    //     console.log(selectedPlace);
    // };

    //Source and Destination change handler
    // const changedHandler = (e, index) => {
    //     const newFormValues = [...bookRideFields];
    //     newFormValues[index].value = e.target.value;
    //     setBookRideFields(newFormValues);

    //     console.log(index);
    //     // calculateRoute();
    // };

    const pickupLocationChangeHandler = (e) => {};

    const handleSearchClick = () => {
        // const source = bookRideFields[0].value;
        // const destination = bookRideFields[1].value;
        // console.log(source, destination);
    };

    const handleBookRide = () => {
        console.log("Book ride button clicked");
        // console.log(autocomplete);
    };

    return (
        <BoxContainer className="RideInfo__Wrapper">
            <BoxContainer className="RideInfo__Card">
                <BoxContainer className="RideInfo__CardContainer">
                    <Heading className="RideInfo__Header">
                        Smart Ride Details
                    </Heading>
                    <RideForm
                        handleRecenter={handleRecenter}
                        handleSearchClick={handleSearchClick}
                        pickupLocationChangeHandler={
                            pickupLocationChangeHandler
                        }
                        handleBookRide={handleBookRide}
                        pickupLocation={pickupLocation}
                        dropLocation={dropLocation}
                        setPickupLocationAuto={setPickupLocationAuto}
                        setDropLocationAuto={setDropLocationAuto}
                        // bookRideFields={bookRideFields}
                        // changedHandler={changedHandler}
                        // setAutocomplete={setAutocomplete}
                        // placeChangedHandler={placeChangedHandler}
                    ></RideForm>
                </BoxContainer>
            </BoxContainer>
            <BoxContainer className="RideInfo__Map">
                <GoogleMaps setMap={setMap}></GoogleMaps>
            </BoxContainer>
        </BoxContainer>
    );
};

export default BookRide;
