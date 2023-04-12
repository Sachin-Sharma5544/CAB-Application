import React, { useState } from "react";
import "./Authentication.css";
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
} from "@chakra-ui/react";
import LoginFormComponent from "../../Utility/Forms/Login Form/LoginFormComponent";

const DriverLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    //this is working
    const loginBtnClickHandler = () => {
        console.log("Login button clicked");
        console.log(email, password);
    };

    return (
        <div className="driverLoginForm">
            <div className="authForm">
                <h1>Driver Login form</h1>
                <LoginFormComponent
                    emailValue={email}
                    passwordValue={password}
                    mailChanhged={emailChangeHandler}
                    passwordChanged={passwordChangeHandler}
                    emailType="email"
                    idEmail="email"
                    idPassword="password"
                    passwordType="password"
                    loginClicked={loginBtnClickHandler}
                ></LoginFormComponent>
            </div>
        </div>
    );
};
export default DriverLoginForm;
