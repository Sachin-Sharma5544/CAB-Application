import "./Footer.css";
import {
    Box,
    Heading,
    Flex,
    Spacer,
    Link,
    Grid,
    GridItem,
    Text,
} from "@chakra-ui/react";

import React from "react";

const FooterComponent = () => {
    return (
        <div className="FooterComponent">
            <Box className="FooterComponent__Wrapper">
                <Box className="Footer__Heading">
                    <Heading>RideSmart</Heading>
                </Box>
                <Grid
                    templateColumns="repeat(5, 1fr)"
                    gap={6}
                    className="Footer__Content"
                    pt={10}
                >
                    <GridItem>
                        <Link>About Us</Link>
                    </GridItem>
                    <GridItem>
                        <Link>Ride</Link>
                    </GridItem>
                    <GridItem>
                        <Link>Drive</Link>
                    </GridItem>
                    <GridItem>
                        <Link>Rides for Business</Link>
                    </GridItem>
                    <GridItem>
                        <Link>Our Offerings</Link>
                    </GridItem>
                </Grid>
                <Grid
                    templateColumns="repeat(5, 1fr)"
                    gap={6}
                    className="Footer__Content"
                    pt={10}
                >
                    <GridItem>
                        <Link>News Room</Link>
                    </GridItem>
                    <GridItem>
                        <Link>Blogs</Link>
                    </GridItem>
                    <GridItem>
                        <Link>Careers</Link>
                    </GridItem>
                    <GridItem>
                        <Link>Safety</Link>
                    </GridItem>
                    <GridItem>
                        <Link>Diversity and Inclusion</Link>
                    </GridItem>
                </Grid>
                <Grid
                    templateColumns="repeat(5, 1fr)"
                    gap={6}
                    className="Footer__Content"
                    pt={10}
                >
                    <GridItem>
                        <Link>Contact us</Link>
                    </GridItem>
                    <GridItem>
                        <Link>Office</Link>
                    </GridItem>
                    <GridItem>
                        <Link>Chat</Link>
                    </GridItem>
                    <GridItem></GridItem>
                    <GridItem></GridItem>
                </Grid>
            </Box>

            <Box className="CopyRight__Info" pt={25} marginLeft="80px">
                <Flex>
                    <Box>
                        <Grid
                            templateColumns="repeat(1, 1fr)"
                            gap={6}
                            className=""
                            pt={10}
                        >
                            <GridItem>
                                <Text>Copyright 2023 RideSmart pvt ltd.</Text>
                            </GridItem>
                        </Grid>
                        <Link></Link>
                    </Box>
                    <Spacer></Spacer>
                    <Box>
                        <Grid
                            templateColumns="repeat(3, 1fr)"
                            gap={6}
                            className=""
                            pt={10}
                        >
                            <GridItem>
                                <Link>Privacy</Link>
                            </GridItem>
                            <GridItem>
                                <Link>Accessibility</Link>
                            </GridItem>
                            <GridItem>
                                <Link>Terms</Link>
                            </GridItem>
                        </Grid>
                    </Box>
                </Flex>
            </Box>
        </div>
    );
};

export default FooterComponent;
