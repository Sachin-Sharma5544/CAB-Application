import { InputGroup, InputLeftAddon, Input, VStack } from "@chakra-ui/react";
import "./inputFieldGroup.css";
import useLoadGoogleMaps from "../../../hooks/useLoadGoogleMaps";
import { Autocomplete } from "@react-google-maps/api";

const InputFieldGroups = (props) => {
    const mapLoaded = useLoadGoogleMaps();

    return (
        <VStack spacing={4}>
            {mapLoaded && (
                <InputGroup className="RideInfo__InputGroup">
                    <InputLeftAddon
                        className="RideInfo__InputGroupLeftAddOn"
                        children={props.name}
                    />

                    <Autocomplete>
                        <Input
                            className="RideInfo__Input"
                            type={props.type}
                            placeholder={props.placeholder}
                            onChange={props.changed}
                            value={props.value}
                        />
                    </Autocomplete>
                </InputGroup>
            )}
        </VStack>
    );
};

export default InputFieldGroups;
