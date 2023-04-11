import { useState } from "react";
import "./Authentication.css";
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
} from "@chakra-ui/react";

const CustomerLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="customerLoginForm">
            <div className="authForm">
                <h1>Customer Login form</h1>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormHelperText>
                        We'll never share your email.
                    </FormHelperText>
                    <p></p>

                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        value={password}
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p></p>
                    <Button>LOGIN</Button>
                </FormControl>
            </div>
        </div>
    );
};
export default CustomerLoginForm;
