import { useState } from "react";
import "./Authentication.css";
import LoginFormComponent from "../../Utility/Forms/Login Form/LoginFormComponent";
import useCustomerLogin from "../../../hooks/utility hooks/Login/useCustomerLogin";

const CustomerLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading, error } = useCustomerLogin();

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    // this part is working now
    const loginBtnClickHandler = async () => {
        console.log("Login button clicked");
        await login(email, password);
    };

    return (
        <div className="customerLoginForm">
            <div className="authForm">
                <h1>Customer Login form</h1>
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
export default CustomerLoginForm;
