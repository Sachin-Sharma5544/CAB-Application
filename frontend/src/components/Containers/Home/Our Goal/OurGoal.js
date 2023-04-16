import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

const OurGoal = () => {
    return (
        <Box className="HomeComponent__OurGoal">
            <Grid templateColumns="3fr 1fr">
                <GridItem>
                    <Heading>
                        We are smartly transforming the Cab travel
                    </Heading>
                    <Text>
                        Movement is what we power. It’s our lifeblood. It runs
                        through our veins. It’s what gets us out of bed each
                        morning. It pushes us to constantly reimagine how we can
                        move better. For you. For all the places you want to go.
                        For all the things you want to get. For all the ways you
                        want to earn. Across the entire world. In real time. At
                        the incredible speed of now.
                    </Text>
                </GridItem>
                <GridItem></GridItem>
            </Grid>
        </Box>
    );
};

export default OurGoal;
