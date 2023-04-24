import React from "react";
import "./CustomerWelcomeComp.css";
import { Box, Grid, GridItem, Image, Text, Link } from "@chakra-ui/react";
import useCustomerAuthContext from "../../../hooks/context hooks/Authentication/useCustomerAuthContext";

import { Link as LinkRouter } from "react-router-dom";

const CustomerWelcomeComp = () => {
    const { user: custUser } = useCustomerAuthContext();
    return (
        <div className="CustomerWelcome__Wrapper">
            <Box className="CustomerWelcome__Item">
                <Grid
                    templateColumns="repeat(2,1fr)"
                    height="100%"
                    width="100%"
                >
                    <GridItem>
                        <Box className="CustomerWelcome__Header">
                            <h1>Hello {custUser.name.split(" ")[0]},</h1>
                        </Box>
                        <Box className="CustomerWelcome__WcTxt">
                            <Text>Wish you a Great Day Ahead!</Text>
                        </Box>
                        <Box className="CustomerWelcome__Links">
                            <span>Like to book a SmartCab? </span>
                            <Link as={LinkRouter} to="/bookride">
                                Click Here
                            </Link>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box className="CustomerWelcome__Image"></Box>
                    </GridItem>
                </Grid>
            </Box>
        </div>
    );
};

export default CustomerWelcomeComp;
