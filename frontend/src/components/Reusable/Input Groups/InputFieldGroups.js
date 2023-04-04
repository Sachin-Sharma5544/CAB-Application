import { InputGroup, InputLeftAddon, Input, VStack } from "@chakra-ui/react";
import "./inputFieldGroup.css";

import { Autocomplete } from "@react-google-maps/api";
const InputFieldGroups = (props) => {
    return (
        <VStack spacing={4}>
            <InputGroup className="RideInfo__InputGroup">
                <InputLeftAddon
                    className="RideInfo__InputGroupLeftAddOn"
                    children={props.name}
                />
                {props.autocomplete ? (
                    <Autocomplete>
                        <Input
                            className="RideInfo__Input"
                            type={props.type}
                            placeholder={props.placeholder}
                            onChange={props.changed}
                        />
                    </Autocomplete>
                ) : (
                    <Input
                        className="RideInfo__Input"
                        type={props.type}
                        placeholder={props.placeholder}
                        onChange={props.changed}
                    />
                )}
            </InputGroup>
        </VStack>
    );
};

export default InputFieldGroups;
