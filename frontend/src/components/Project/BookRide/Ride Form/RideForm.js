import InputFieldGroups from "../../../Reusable/Input Groups/InputFieldGroups";
import Aux from "../../../HOC/Aux";
import DropdownElement from "../../../Reusable/Dropdowns/DropdownElement";
import ButtonElement from "../../../Reusable/Buttons/ButtonElement";
import BoxContainer from "../../../HOC/BoxContainer";

const RideForm = (props) => {
    const bookRideFields = [
        { name: "Drop", type: "text", placeholder: "Drop location" },
        { name: "Pickup", type: "text", placeholder: "Pickup location" },
    ];

    const changedHandler = (e) => {
        console.log("you updated field", e.target.placeholder);
    };

    return (
        <Aux>
            {bookRideFields.map((field, index) => (
                <InputFieldGroups
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    changed={(e) => changedHandler(e)}
                    key={Math.ceil(
                        Math.random() * 8100000 * Math.random() * 910000
                    )}
                    autocomplete={props.Autocomplete}
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
