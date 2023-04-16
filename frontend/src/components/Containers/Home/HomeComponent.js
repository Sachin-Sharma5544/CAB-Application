import React from "react";
import "./HomeComponent.css";
import HomeContent from "./Content/HomeContent";
import HomeBusiness from "./Business/HomeBusiness";
// import HomeRideType from "./Ride Type/HomeRideType";
import OurGoal from "./Our Goal/OurGoal";

const HomeComponent = () => {
    return (
        <div className="HomeComponent">
            <HomeContent></HomeContent>
            <OurGoal></OurGoal>
            <HomeBusiness></HomeBusiness>
            {/* <HomeRideType></HomeRideType> */}
        </div>
    );
};

export default HomeComponent;
