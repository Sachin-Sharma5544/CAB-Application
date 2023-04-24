import React from "react";
import "./DriverWelcomeComp.css";
import { Box, Grid, GridItem, Text, Link } from "@chakra-ui/react";
import useDriverAuthContext from "../../../hooks/context hooks/Authentication/useDriverAuthContext";

import { Link as LinkRouter } from "react-router-dom";

const DriverWelcomeComp = () => {
    const { user: drivUser } = useDriverAuthContext();

    return (
        <div className="DriverWelcome__Wrapper">
            <Box className="DriverWelcome__Item">
                <Grid
                    templateColumns="repeat(2,1fr)"
                    height="100%"
                    width="100%"
                >
                    <GridItem>
                        <Box className="DriverWelcome__Header">
                            <h1>Hi {drivUser.name.split(" ")[0]},</h1>
                        </Box>
                        <Box className="DriverWelcome__WcTxt">
                            <Text>Wish you a Great Day Ahead!</Text>
                        </Box>
                        <Box className="DriverWelcome__Links">
                            <span>Have SmartCab Bookings? </span>
                            <Link as={LinkRouter} to="/booking/details">
                                Check Here
                            </Link>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box className="DriverWelcome__Image"></Box>
                    </GridItem>
                </Grid>
            </Box>
        </div>
    );
};

export default DriverWelcomeComp;
