import { Box, Spacer, Flex, Link, Center } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Flex
            className="Navbar"
            bg={"#000"}
            color={"#fff"}
            minW={"650px"}
            position="fixed"
            width="100%"
        >
            <Flex>
                <Center>
                    <Box p="4" fontSize={"xx-large"}>
                        DriveSmart
                    </Box>
                    <Box p="4">
                        <Link
                            onClick={() => console.log("Book a ride")}
                            fontSize={"xl"}
                        >
                            Book Ride
                        </Link>
                    </Box>
                    <Box p="4">
                        <Link
                            onClick={() => console.log("Drive with us")}
                            fontSize={"xl"}
                        >
                            Drive with us
                        </Link>
                    </Box>
                </Center>
            </Flex>
            <Spacer></Spacer>
            <Flex>
                <Center>
                    <Box p="4">
                        <Link
                            onClick={() => console.log("Book a ride")}
                            fontSize={"xl"}
                        >
                            Login
                        </Link>
                    </Box>
                    <Box p="4">
                        <Link
                            onClick={() => console.log("Book a ride")}
                            fontSize={"xl"}
                        >
                            Sign Up
                        </Link>
                    </Box>
                </Center>
            </Flex>
        </Flex>
    );
};

export default Navbar;
