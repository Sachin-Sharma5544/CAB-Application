import React from "react";
import "./HomeComponent.css";
import { Box, Heading, Text } from "@chakra-ui/react";
import HomeContent from "./Content/HomeContent";
import HomeBusiness from "./Business/HomeBusiness";
import HomeRideType from "./Ride Type/HomeRideType";

const HomeComponent = () => {
    return (
        <div className="HomeComponent">
            <HomeContent></HomeContent>
            <HomeBusiness></HomeBusiness>
            {/* <HomeRideType></HomeRideType> */}
        </div>
    );
};

export default HomeComponent;