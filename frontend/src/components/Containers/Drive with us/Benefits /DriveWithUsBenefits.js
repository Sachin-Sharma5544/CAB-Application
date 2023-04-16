import {
    Box,
    Grid,
    GridItem,
    Heading,
    Icon,
    Image,
    Text,
} from "@chakra-ui/react";
import React from "react";
import driveImg3 from "../../../../assets/images/Drive with us 2.jpg";
import { AiOutlineCalendar } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";

const DriveWithUsBenefits = () => {
    return (
        <Box className="DriveWithUsBenefits">
            <Box className="DriveWithUsBenefits__Container">
                <Box className="DriveWithUsBenefits__ContentWrapper">
                    <Box className="DriveWithUsBenefits__Content">
                        <Heading> Why drive with us</Heading>
                        <Box className="image">
                            <Image src={driveImg3}></Image>
                        </Box>
                        <Box className="DriveWithUsBenefits__Grid">
                            <Grid templateColumns="repeat(3, 1fr)" mt="70px">
                                <GridItem>
                                    <Icon as={AiOutlineCalendar}></Icon>
                                    <Heading>Free to select timings</Heading>
                                    <Text>
                                        You decide when and how often you drive.
                                    </Text>
                                </GridItem>
                                <GridItem>
                                    <Icon as={GrMoney}></Icon>
                                    <Heading>Fast payment settlements</Heading>
                                    <Text>
                                        Weekly payments in your bank account.
                                    </Text>
                                </GridItem>

                                <GridItem>
                                    <Icon as={MdOutlineSupportAgent}></Icon>
                                    <Heading>24 * 7 support</Heading>
                                    <Text>
                                        If there’s anything that you need, you
                                        can reach us anytime.
                                    </Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default DriveWithUsBenefits;
