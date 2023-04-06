import InputFieldGroups from "../../../Utility/Input Groups/InputFieldGroups";
import Aux from "../../../Hoc/Aux";
import DropdownElement from "../../../Utility/Dropdowns/DropdownElement";
import ButtonElement from "../../../Utility/Buttons/ButtonElement";
import BoxContainer from "../../../Hoc/BoxContainer";
import { useDropContext } from "../../../../hooks/useDropContext";
import { usePickupContext } from "../../../../hooks/usePickupContext";
import { useState } from "react";

const RideForm = (props) => {
    const [bookRideFields, setBookRideFields] = useState([
        { name: "Drop", type: "text", placeholder: "Drop location", value: "" },
        {
            name: "Pickup",
            type: "text",
            placeholder: "Pickup location",
            value: "",
        },
        // {
        //     name: "Ridetype",
        //     type: "select",
        //     placeholder: "Ride Type",
        //     value: "",
        // },
    ]);

    // const { pickupLocation, dispatch: dispatchP } = usePickupContext();
    // const { dropLocation, dispatch: dispatchD } = useDropContext();

    const changedHandler = (e, index) => {
        const newFormValues = [...bookRideFields];
        newFormValues[index].value = e.target.value;
        setBookRideFields(newFormValues);
    };

    return (
        <Aux>
            {bookRideFields.map((field, index) => (
                <InputFieldGroups
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    Changed={(e) => changedHandler(e, index)}
                    // key={Math.ceil(
                    //     Math.random() * 8100000 * Math.random() * 910000
                    // )}
                    key={index}
                    ipvalue={field.value}
                />
            ))}
            <DropdownElement placeholder="Ride Type"></DropdownElement>
            <BoxContainer className="RideInfo__Search">
                <ButtonElement handleClick={props.handleSearchClick}>
                    Search
                </ButtonElement>
            </BoxContainer>
        </Aux>
    );
};

export default RideForm;
