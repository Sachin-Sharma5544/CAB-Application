import {
    Box,
    Spacer,
    Flex,
    Link as ChakraLink,
    Center,
    Text,
} from "@chakra-ui/react";
import "./Navbar.css";
import { Link as RouterLink } from "react-router-dom";
import useCustomerAuthContext from "../../../hooks/context hooks/Authentication/useCustomerAuthContext";
import useDriverAuthContext from "../../../hooks/context hooks/Authentication/useDriverAuthContext";
import useLogout from "../../../hooks/utility hooks/Logout/useLogout";
import UserProfileIcon from "../../Utility/User Profile Icon/UserProfileIcon";

const Navbar = (props) => {
    const { user: custUser } = useCustomerAuthContext();
    const { user: drivUser } = useDriverAuthContext();
    const { logout } = useLogout();

    const handleLogout = () => {
        logout();
    };

    console.log(custUser);

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

                        {custUser && custUser.userType === "customer" && (
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
                        )}
                        {drivUser && drivUser.userType === "driver" && (
                            <Box p="4">
                                <ChakraLink
                                    onClick={() => console.log("Book a ride")}
                                    fontSize={"xl"}
                                    as={RouterLink}
                                    to="/booking/details"
                                >
                                    Your Bookings
                                </ChakraLink>
                            </Box>
                        )}
                        {drivUser && drivUser.userType === "driver" && (
                            <Box p="4">
                                <ChakraLink
                                    fontSize={"xl"}
                                    as={RouterLink}
                                    to="/driver/vehicle/details"
                                >
                                    Vehicle Details
                                </ChakraLink>
                            </Box>
                        )}
                        <Box p="4">
                            <ChakraLink
                                onClick={() => console.log("Drive with us")}
                                fontSize={"xl"}
                                as={RouterLink}
                                to="/drive"
                            >
                                Drive with us
                            </ChakraLink>
                        </Box>
                    </Center>
                </Flex>
                <Spacer></Spacer>
                <Flex>
                    <Center>
                        {custUser && (
                            <Box p="4">
                                <UserProfileIcon
                                    name={custUser.name}
                                    handleLogout={handleLogout}
                                ></UserProfileIcon>
                            </Box>
                        )}
                        {drivUser && (
                            <Box p="4">
                                <UserProfileIcon
                                    name={drivUser.name}
                                    handleLogout={handleLogout}
                                ></UserProfileIcon>
                            </Box>
                        )}
                        {!custUser && !drivUser && (
                            <Box p="4">
                                <ChakraLink
                                    onClick={() => {
                                        props.displayModal();
                                        props.setModalType("Login");
                                    }}
                                    fontSize={"xl"}
                                    as={RouterLink}
                                >
                                    Login
                                </ChakraLink>
                            </Box>
                        )}
                        {!custUser && !drivUser && (
                            <Box p="4">
                                <ChakraLink
                                    onClick={() => {
                                        props.displayModal();
                                        props.setModalType("Signup");
                                    }}
                                    fontSize={"xl"}
                                    as={RouterLink}
                                >
                                    Sign Up
                                </ChakraLink>
                            </Box>
                        )}
                    </Center>
                </Flex>
            </Flex>
        </>
    );
};

export default Navbar;
