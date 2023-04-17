import { Select } from "@chakra-ui/react";

const DropdownElement = (props) => {
    return (
        <Select
            placeholder={props.placeholder}
            fontSize={"1.1rem"}
            padding={"20px 0px"}
            onChange={props.selectRidetypeHandler}
        >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="rental">Rental</option>
            <option value="auto">Auto</option>
        </Select>
    );
};

export default DropdownElement;
