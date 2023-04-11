import React, { useState } from "react";
import "./Authentication.css";
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
} from "@chakra-ui/react";

const DriverLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="driverLoginForm">
            <div className="authForm">
                <h1>Driver Login form</h1>;
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormHelperText>
                        We'll never share your email.
                    </FormHelperText>
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        value={password}
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p>{email}</p>
                    <Button>LOGIN</Button>
                </FormControl>
            </div>
        </div>
    );
};
export default DriverLoginForm;
