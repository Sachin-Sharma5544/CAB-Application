import React, { useState } from "react";
import "./Authentication.css";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
} from "@chakra-ui/react";

const CustomerLoginForm = () => {
    return (
        <div className="authForm">
            <h1>Customer Login form</h1>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
                <Button>LOGIN</Button>
            </FormControl>
        </div>
    );
};
export default CustomerLoginForm;
