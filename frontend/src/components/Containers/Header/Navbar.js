import {
    Box,
    Spacer,
    Flex,
    Link as ChakraLink,
    Center,
} from "@chakra-ui/react";
import "./Navbar.css";
import { useState } from "react";
import ModalComponent from "../../Utility/Modal/ModalComponent";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
    const [showModal, setShowmodal] = useState(false);

    const displayModal = () => {
        setShowmodal(true);
    };

    const closeModal = () => {
        setShowmodal(false);
    };

    return (
        <>
            <Flex
                className="Navbar"
                bg={"#000"}
                color={"#fff"}
                minW={"650px"}
                position="fixed"
                width="100%"
                zIndex={2}
            >
                <Flex>
                    <Center>
                        <ChakraLink
                            className="Brand"
                            p="4"
                            fontSize={"xx-large"}
                            as={RouterLink}
                            to="/"
                        >
                            RideSmart
                        </ChakraLink>
                        <Box p="4">
                            <ChakraLink
                                onClick={() => console.log("Book a ride")}
                                fontSize={"xl"}
                                as={RouterLink}
                                to="/bookride"
                            >
                                Book Ride
                            </ChakraLink>
                        </Box>
                        <Box p="4">
                            <ChakraLink
                                onClick={() => console.log("Book a ride")}
                                fontSize={"xl"}
                                as={RouterLink}
                                to="/ride/details"
                            >
                                Your Rides
                            </ChakraLink>
                        </Box>
                        <Box p="4">
                            <ChakraLink
                                onClick={() => console.log("Drive with us")}
                                fontSize={"xl"}
                                as={RouterLink}
                                to="/drive-with-us"
                            >
                                Drive with us
                            </ChakraLink>
                        </Box>
                    </Center>
                </Flex>
                <Spacer></Spacer>
                <Flex>
                    <Center>
                        <Box p="4">
                            <ChakraLink
                                onClick={displayModal}
                                fontSize={"xl"}
                                as={RouterLink}
                            >
                                Login
                            </ChakraLink>
                        </Box>
                        <Box p="4">
                            <ChakraLink
                                onClick={() => console.log("Book a ride")}
                                fontSize={"xl"}
                                as={RouterLink}
                                to="/drive-with-us"
                            >
                                Sign Up
                            </ChakraLink>
                        </Box>
                    </Center>
                </Flex>
            </Flex>
            {showModal && (
                <ModalComponent onOpen={showModal} onClose={closeModal} />
            )}
        </>
    );
};

export default Navbar;
