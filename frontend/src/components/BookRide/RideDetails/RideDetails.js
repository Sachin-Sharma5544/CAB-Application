import {
    Box,
    VStack,
    InputGroup,
    InputLeftAddon,
    Input,
    Heading,
    Select,
    Button,
    Flex,
} from "@chakra-ui/react";
import { useState } from "react";

const RideDetails = () => {
    const [pickup, setPickup] = useState("");
    const [drop, setDrop] = useState("");
    const [rideType, setRideType] = useState("");

    const handleClick = () => {
        console.log("you clicked book ride button");
        console.log(pickup, drop, rideType);
    };

    return (
        <Box
            className="Journey-Info"
            border={"5px solid black"}
            backgroundImage="url('https://lh3.googleusercontent.com/M9dRt3sJK8ukzk28KMD0xOvuQVuaqRh5yT8fmVgJ9pkas2ZVgs7JXeCWQex6zuWnxWyrWgXrmkdIMm3CrE0dLSKr0LAcV_1Gecut1mxt')"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"100%"}
            backgroundPosition={"initial"}
            backgroundClip={"content-box"}
        >
            <Box
                boxShadow={"5px 7px 10px rgba(50,50,50,0.3)"}
                padding={"50px 0px"}
                borderRadius={"10px"}
                borderColor={"rgba(0,0,0,0.1)"}
                border={"1px"}
                maxW={"700px"}
                margin={"200px auto"}
                backgroundColor={"rgba(255,255,255,1)"}
                position="relative"
            >
                <Box padding={"0px 10px"}>
                    <Heading textAlign={"center"} margin={"20px 10px"}>
                        Smart Ride Details
                    </Heading>
                    <VStack spacing={4}>
                        <InputGroup maxW={"100%"} padding={"20px 0px"}>
                            <InputLeftAddon
                                children="Pick Up"
                                fontSize={"1.1rem"}
                            />
                            <Input
                                type="tel"
                                placeholder="Pick up location"
                                fontSize={"1.1rem"}
                                value={pickup}
                                onChange={(e) => {
                                    setPickup(e.target.value);
                                }}
                            />
                        </InputGroup>
                    </VStack>
                    <VStack spacing={4}>
                        <InputGroup padding={"20px 0px"}>
                            <InputLeftAddon
                                children="Drop"
                                paddingRight={9}
                                fontSize={"1.1rem"}
                            />
                            <Input
                                type="tel"
                                placeholder="Drop Location"
                                fontSize={"1.1rem"}
                                value={drop}
                                onChange={(e) => {
                                    setDrop(e.target.value);
                                }}
                            />
                        </InputGroup>
                    </VStack>
                    <Select
                        placeholder="Ride Type"
                        fontSize={"1.1rem"}
                        padding={"20px 0px"}
                        value={rideType}
                        onChange={(e) => {
                            setRideType(e.target.value);
                        }}
                    >
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                        <option value="rental">Rental</option>
                        <option value="auto">Auto</option>
                    </Select>

                    <Flex>
                        <Button margin={"0px auto"} onClick={handleClick}>
                            Book Ride
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default RideDetails;
