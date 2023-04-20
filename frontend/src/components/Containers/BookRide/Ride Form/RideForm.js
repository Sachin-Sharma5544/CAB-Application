import InputFieldGroups from "../../../Utility/Input Groups/InputFieldGroups";
import Aux from "../../../HOC/AuxComponent";
import DropdownElement from "../../../Utility/Dropdowns/DropdownElement";
import ButtonElement from "../../../Utility/Buttons/ButtonElement";
import BoxContainer from "../../../HOC/BoxContainerComp";
import { Text } from "@chakra-ui/react";

/* 
This component to be refactored or changed to call input fields seperately because when
we are using map method to create input form, autocomplete considers second field for
providing the suggestion and not the first input.
*/

const RideForm = (props) => {
    const {
        pickupLocation,
        dropLocation,
        handleRecenter,
        handleSearchClick,
        pickupLocationChangeHandler,
        dropLocationChangeHandler,
        handleBookRide,
        setPickupLocationAuto,
        setDropLocationAuto,
        dropPlaceChangedHandler,
        pickupPlaceChangedHandler,
        selectRidetypeHandler,
        rideBookErr,
    } = props;

    return (
        <Aux>
            {/* Drop Location Input field */}
            <InputFieldGroups
                field={dropLocation}
                Changed={dropLocationChangeHandler}
                setAutocomplete={setDropLocationAuto}
                placeChangedHandler={dropPlaceChangedHandler}
            />
            {/* Pickup Location Input field */}

            <InputFieldGroups
                field={pickupLocation}
                Changed={pickupLocationChangeHandler}
                setAutocomplete={setPickupLocationAuto}
                placeChangedHandler={pickupPlaceChangedHandler}
            />
            <DropdownElement
                placeholder="Ride Type"
                selectRidetypeHandler={selectRidetypeHandler}
            ></DropdownElement>
            <BoxContainer className="RideInfo__Search">
                <ButtonElement handleClick={handleSearchClick}>
                    Search Cabs
                </ButtonElement>
                <ButtonElement handleClick={handleRecenter}>
                    Re-Center
                </ButtonElement>
                <ButtonElement handleClick={handleBookRide}>
                    Book Ride
                </ButtonElement>
            </BoxContainer>

            {rideBookErr && (
                <Text mt={5}>
                    We are sorry!! Your ride booking is not confirmed, Please
                    retry.
                </Text>
            )}
        </Aux>
    );
};

export default RideForm;
