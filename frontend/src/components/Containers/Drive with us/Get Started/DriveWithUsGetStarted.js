import {
    Box,
    Image,
    Grid,
    GridItem,
    Text,
    Heading,
    Flex,
    Button,
    Link,
} from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

const DriveWithUsGetStarted = () => {
    const navigate = useNavigate();
    const getStartedbuttonhandler = () => {
        navigate("/driver/signup");
    };
    return (
        <Box className="GetStarted__Wrapper">
            <Box className="GetStarted__Container">
                <Grid
                    templateColumns="repeat(2, 1fr)"
                    gap={6}
                    className=""
                    pt={10}
                >
                    <GridItem>
                        <Box className="GetStarted__ItemLeft">
                            <Heading>
                                Drive when you want, make what you need.
                            </Heading>
                            <Box>
                                <Text>Earn on your own schedule.</Text>
                            </Box>
                            <Flex alignItems="center">
                                <Box>
                                    <Button onClick={getStartedbuttonhandler}>
                                        Get Started
                                    </Button>
                                </Box>
                                <Box>
                                    <Link as={LinkRouter} to="/driver/login">
                                        Already have an account? Sign in
                                    </Link>
                                </Box>
                            </Flex>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box className="GetStarted__ItemRight">
                            <Box className="GetStarted__Image"></Box>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
};

export default DriveWithUsGetStarted;
