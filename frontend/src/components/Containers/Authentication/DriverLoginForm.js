import React, { useState } from "react";
import "./Authentication.css";
import LoginFormComponent from "../../Utility/Forms/Login Form/LoginFormComponent";
import useDriverLogin from "../../../hooks/utility hooks/Login/useDriverLogin";

const DriverLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading, error } = useDriverLogin();

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    //this is working
    const loginBtnClickHandler = async () => {
        console.log("Login button clicked");
        console.log(email, password);
        await login(email, password);
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
                    isLoading={isLoading}
                ></LoginFormComponent>
                {error && <h5 className="formError">{error}</h5>}
            </div>
        </div>
    );
};
export default DriverLoginForm;
