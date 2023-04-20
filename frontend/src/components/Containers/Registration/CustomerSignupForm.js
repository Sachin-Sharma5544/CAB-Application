import React, { useState } from "react";
import "./Registration.css";
import SignupFormComponent from "../../Utility/Forms/Signup Form/SignupFormComponent";
import useCustomerSignup from "../../../hooks/utility hooks/Signup/useCustomerSignup";
import { useToast } from "@chakra-ui/react";

const CustomerSignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup, isLoading, error } = useCustomerSignup();
    const toast = useToast();

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    // this part is working now
    const signupBtnClickHandler = async () => {
        await signup(email, password);
        toast({
            title: "Your registration is completed",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
        });
    };

    return (
        <div className="customerRegForm">
            <div className="regForm">
                <h1>Customer Registration</h1>
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
                    isLoading={isLoading}
                ></SignupFormComponent>
                {error && <h5 className="formError">{error}</h5>}
            </div>
        </div>
    );
};

export default CustomerSignupForm;
