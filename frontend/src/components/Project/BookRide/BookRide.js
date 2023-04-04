import "./BookRide.css";
import BoxContainer from "../../HOC/BoxContainer";
import { Heading } from "@chakra-ui/react";
import RideForm from "./Ride Form/RideForm";
import GoogleMaps from "./Google Maps/GoogleMaps";
import { useState } from "react";

const BookRide = (props) => {
    const [map, setMap] = useState(null);
    const [autocomplete, setAutoComplete] = useState(false);

    if (map) {
        setAutoComplete(true);
    }
    const handleRecenter = () => {
        console.log("handleRecenter clicked");
        map.panTo({ lat: 28.6659158, lng: 77.1488977 });
    };

    const handleSearchClick = () => {
        console.log(autocomplete, "cc");
    };

    return (
        <BoxContainer className="RideInfo__Wrapper">
            <BoxContainer className="RideInfo__Card">
                <BoxContainer className="RideInfo__CardContainer">
                    <Heading className="RideInfo__Header">
                        Smart Ride Details
                    </Heading>
                    <RideForm
                        handleClick={handleRecenter}
                        Autocomplete={autocomplete}
                        handleSearchClick={handleSearchClick}
                    ></RideForm>
                </BoxContainer>
            </BoxContainer>
            <BoxContainer className="RideInfo__Map">
                <GoogleMaps
                    setMap={setMap}
                    setAutoComplete={setAutoComplete}
                ></GoogleMaps>
            </BoxContainer>
        </BoxContainer>
    );
};

export default BookRide;
