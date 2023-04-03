import "./BookRide.css";
import BoxContainer from "../../HOC/BoxContainer";
import { Heading } from "@chakra-ui/react";
import RideForm from "./Ride Form/RideForm";

const BookRide = (props) => {
    return (
        <BoxContainer className="RideInfo__Wrapper">
            <BoxContainer className="RideInfo__Card">
                <BoxContainer className="RideInfo__CardContainer">
                    <Heading className="RideInfo__Header">
                        Smart Ride Details
                    </Heading>
                    <RideForm></RideForm>
                </BoxContainer>
            </BoxContainer>
        </BoxContainer>
    );
};

export default BookRide;
