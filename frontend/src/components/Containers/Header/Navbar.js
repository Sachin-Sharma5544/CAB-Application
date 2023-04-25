import {
    Box,
    Spacer,
    Flex,
    Link as ChakraLink,
    Center,
} from "@chakra-ui/react";
import "./Navbar.css";
import { Link as RouterLink } from "react-router-dom";
import useCustomerAuthContext from "../../../hooks/context hooks/Authentication/useCustomerAuthContext";
import useDriverAuthContext from "../../../hooks/context hooks/Authentication/useDriverAuthContext";
import useLogout from "../../../hooks/utility hooks/Logout/useLogout";
import UserProfileIcon from "../../Utility/User Profile Icon/UserProfileIcon";
import NotificationIcon from "../../Utility/Notification Icon/NotificationIcon";
import { useState } from "react";
import useScoket from "../../../hooks/utility hooks/Socket/useScoket";
import useSocketContext from "../../../hooks/context hooks/Socket/useSocketContext";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const [driverNotificationCount, setDriverNotificationCount] = useState(0);

    const { user: custUser } = useCustomerAuthContext();
    const { user: drivUser } = useDriverAuthContext();
    const { logout } = useLogout();
    useScoket();
    const { socket } = useSocketContext();

    const navigate = useNavigate();

    if (!socket) return;

    const handleLogout = () => {
        logout();
    };

    const handleNotificationClick = () => {
        if (driverNotificationCount > 0) {
            setDriverNotificationCount(0);
            navigate("/booking/details");
            console.log("Notification clicked");
        }
    };

    socket.on("RideConfirmed", (data) => {
        if (drivUser.email === data) {
            setDriverNotificationCount(driverNotificationCount + 1);
        }
    });

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
                            <Box>
                                <NotificationIcon count={0}></NotificationIcon>
                            </Box>
                        )}

                        {drivUser && (
                            <Box onClick={handleNotificationClick}>
                                <NotificationIcon
                                    count={driverNotificationCount}
                                ></NotificationIcon>
                            </Box>
                        )}

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
