import {
    InputGroup,
    InputLeftAddon,
    Input,
    VStack,
    InputRightElement,
    Button,
} from "@chakra-ui/react";
import "./inputFieldGroup.css";
import useLoadGoogleMaps from "../../../hooks/utility hooks/Google Map/useLoadGoogleMaps";
import { Autocomplete } from "@react-google-maps/api";

import Aux from "../../HOC/AuxComponent";

const InputFieldGroups = (props) => {
    const { setAutocomplete, placeChangedHandler, field } = props;
    const mapLoaded = useLoadGoogleMaps();

    return (
        <VStack spacing={4}>
            {mapLoaded && (
                <InputGroup className="RideInfo__InputGroup">
                    <InputLeftAddon
                        className="RideInfo__InputGroupLeftAddOn"
                        children={field.name}
                    />
                    <Autocomplete
                        onLoad={(autocomplete) => {
                            setAutocomplete(autocomplete);
                        }}
                        onPlaceChanged={placeChangedHandler}
                    >
                        <Aux>
                            <Input
                                className="RideInfo__Input"
                                type={field.type}
                                placeholder={field.placeholder}
                                onChange={props.Changed}
                                value={field.value}
                            />
                        </Aux>
                    </Autocomplete>
                </InputGroup>
            )}
        </VStack>
    );
};

export default InputFieldGroups;
