import { Select } from "@chakra-ui/react";

const DropdownElement = (props) => {
    return (
        <Select
            placeholder={props.placeholder}
            fontSize={"1.1rem"}
            padding={"20px 0px"}
            onChange={props.selectRidetypeHandler}
        >
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Rental">Rental</option>
            <option value="Auto">Auto</option>
        </Select>
    );
};

export default DropdownElement;
