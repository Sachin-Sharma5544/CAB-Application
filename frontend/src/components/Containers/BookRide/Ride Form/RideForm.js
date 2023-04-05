import InputFieldGroups from "../../../Utility/Input Groups/InputFieldGroups";
import Aux from "../../../Hoc/Aux";
import DropdownElement from "../../../Utility/Dropdowns/DropdownElement";
import ButtonElement from "../../../Utility/Buttons/ButtonElement";
import BoxContainer from "../../../Hoc/BoxContainer";
import { useDropContext } from "../../../../hooks/useDropContext";
import { usePickupContext } from "../../../../hooks/usePickupContext";
import { useState } from "react";

const RideForm = (props) => {
    const bookRideFields = [
        { name: "Drop", type: "text", placeholder: "Drop location" },
        { name: "Pickup", type: "text", placeholder: "Pickup location" },
    ];

    const [pickLoc, setPickLoc] = useState("");
    const [dropLoc, setDropLoc] = useState("");

    const { pickupLocation, dispatch: dispatchP } = usePickupContext();
    const { dropLocation, dispatch: dispatchD } = useDropContext();

    const changedHandler = (e, index) => {
        console.log("you updated field", e.target.value);
        console.log(index);
        if (index === 1) {
            setPickLoc(e.target.value);
            dispatchP({ type: "SET_PICKUP", payload: e.target.value });
        }

        if (index === 0) {
            setDropLoc(e.target.value);
            dispatchD({ type: "SET_DROP", payload: e.target.value });
        }
    };

    const valueInputGroup = (index) => {
        let val;
        if (index === 1) {
            val = pickLoc;
        }

        if (index === 0) {
            val = dropLoc;
        }
        return val;
    };

    return (
        <Aux>
            {bookRideFields.map((field, index) => (
                <InputFieldGroups
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    changed={(e) => changedHandler(e, index)}
                    key={Math.ceil(
                        Math.random() * 8100000 * Math.random() * 910000
                    )}
                    value={valueInputGroup(index)}
                />
            ))}
            <DropdownElement placeholder="Ride Type"></DropdownElement>
            <BoxContainer className="RideInfo__Search">
                <ButtonElement handleClick={props.handleSearchClick}>
                    Search
                </ButtonElement>
            </BoxContainer>
            <ButtonElement handleClick={props.handleClick}>
                Re-center
            </ButtonElement>
        </Aux>
    );
};

export default RideForm;
