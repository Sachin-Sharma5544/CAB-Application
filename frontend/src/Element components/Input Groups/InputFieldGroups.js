import { InputGroup, InputLeftAddon, Input, VStack } from "@chakra-ui/react";

const inputFieldGroups = () => {
    return (
        <VStack spacing={4}>
            <InputGroup padding={"20px 0px"} maxW={"100%"}>
                <InputLeftAddon
                    children="Drop"
                    paddingRight={9}
                    fontSize={"1.1rem"}
                />
                <Input
                    type="tel"
                    placeholder="Drop Location"
                    fontSize={"1.1rem"}
                />
            </InputGroup>
        </VStack>
    );
};

export default inputFieldGroups;
