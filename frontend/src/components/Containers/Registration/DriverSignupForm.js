import React, { useState } from "react";
import "./Registration.css";
import SignupFormComponent from "../../Utility/Forms/Signup Form/SignupFormComponent";

const DriverSignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    // this part is working now
    const signupBtnClickHandler = () => {
        console.log("Signup button clicked");
        console.log(email, password);
    };

    return (
        <div className="customerRegForm">
            <div className="regForm">
                <h1>Driver Registration</h1>
                <SignupFormComponent
                    emailValue={email}
                    passwordValue={password}
                    mailChanhged={emailChangeHandler}
                    passwordChanged={passwordChangeHandler}
                    emailType="email"
                    idEmail="email"
                    idPassword="password"
                    passwordType="password"
                    loginClicked={signupBtnClickHandler}
                ></SignupFormComponent>
            </div>
        </div>
    );
};

export default DriverSignupForm;
