import InputFieldGroups from "../../../Utility/Input Groups/InputFieldGroups";
import Aux from "../../../Hoc/Aux";
import DropdownElement from "../../../Utility/Dropdowns/DropdownElement";
import ButtonElement from "../../../Utility/Buttons/ButtonElement";
import BoxContainer from "../../../Hoc/BoxContainer";
import { useDropContext } from "../../../../hooks/useDropContext";
import { usePickupContext } from "../../../../hooks/usePickupContext";
import { useRef, useState } from "react";

/* 

This component to be refactored or changed to call input fields seperately because when
we are using map method to create input form, autocomplete considers second field for
providing the suggestion and not the first input.


*/

const RideForm = (props) => {
    const {
        bookRideFields,
        changedHandler,
        dropLocationChangeHandler,
        pickupLocationChangeHandler,
        handleSearchClick,
        handleRecenter,
        handleBookRide,
        setAutocomplete,
        placeChangedHandler,
    } = props;

    return (
        <Aux>
            {/* {bookRideFields.map((field, index) => (
                <InputFieldGroups
                    field={field}
                    Changed={(e) => changedHandler(e, index)}
                    key={index}
                    setAutocomplete={setAutocomplete}
                    placeChangedHandler={() => placeChangedHandler(index)}
                />
            ))} */}

            {/* Drop Location Input field */}
            <InputFieldGroups
                field={bookRideFields[0]}
                Changed={dropLocationChangeHandler}
                key={bookRideFields[0].id}
                setAutocomplete={setAutocomplete}
                placeChangedHandler={placeChangedHandler}
            />
            {/* Pickup Location Input field */}

            <InputFieldGroups
                field={bookRideFields[1]}
                Changed={pickupLocationChangeHandler}
                key={bookRideFields[1].id}
                setAutocomplete={setAutocomplete}
                placeChangedHandler={placeChangedHandler}
            />
            <DropdownElement placeholder="Ride Type"></DropdownElement>
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
        </Aux>
    );
};

export default RideForm;
