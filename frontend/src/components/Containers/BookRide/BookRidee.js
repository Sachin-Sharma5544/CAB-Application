import "./BookRide.css";
import BoxContainer from "../../Hoc/BoxContainer";
import { Heading } from "@chakra-ui/react";
import RideForm from "./Ride Form/RideForm";
import GoogleMaps from "./Google Maps/GoogleMapss";
import { useState } from "react";

const BookRide = (props) => {
    const [map, setMap] = useState(null);

    const handleRecenter = () => {
        console.log("handleRecenter clicked");
        map.panTo({ lat: 28.6659158, lng: 77.1488977 });
    };

    const handleSearchClick = (source, destination, dropRef, pickupref) => {
        // console.log(autocomplete, "cc");

        console.log(source, destination);
        console.log(dropRef);
        console.log(pickupref);
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
                        handleSearchClick={handleSearchClick}
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
