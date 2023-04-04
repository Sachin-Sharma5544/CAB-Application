import InputFieldGroups from "../../../Reusable/Input Groups/InputFieldGroups";
import Aux from "../../../HOC/Aux";
import DropdownElement from "../../../Reusable/Dropdowns/DropdownElement";
import ButtonElement from "../../../Reusable/Buttons/ButtonElement";
import BoxContainer from "../../../HOC/BoxContainer";

import { useDropContext } from "../../../../hooks/useDropContext";
import { usePickupContext } from "../../../../hooks/usePickupContext";

const RideForm = (props) => {
    const bookRideFields = [
        { name: "Drop", type: "text", placeholder: "Drop location" },
        { name: "Pickup", type: "text", placeholder: "Pickup location" },
    ];

    const { pickupLocation, dispatch: dispatchP } = usePickupContext();
    const { dropLocation, dispatch: dispatchD } = useDropContext();

    const changedHandler = (e, index) => {
        console.log("you updated field", e.target.value);
        console.log(index);
        if (index === 1) {
            dispatchP({ type: "SET_PICKUP", payload: e.target.value });
        }

        if (index === 0) {
            dispatchD({ type: "SET_DROP", payload: e.target.value });
        }
    };

    const valueInputGroup = (index) => {
        if (index === 1) {
            return pickupLocation;
        }

        if (index === 0) {
            return dropLocation;
        }
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
                    value={() => valueInputGroup(index)}
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
