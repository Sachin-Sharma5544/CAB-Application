import "./DriveWithUs.css";
import React from "react";
import DriveWithUsGetStarted from "./Get Started/DriveWithUsGetStarted";
import DriveWithUsBenefits from "./Benefits /DriveWithUsBenefits";

const DriveWithUs = () => {
    return (
        <div className="DriveWithUs">
            <DriveWithUsGetStarted></DriveWithUsGetStarted>
            <DriveWithUsBenefits></DriveWithUsBenefits>
        </div>
    );
};

export default DriveWithUs;
