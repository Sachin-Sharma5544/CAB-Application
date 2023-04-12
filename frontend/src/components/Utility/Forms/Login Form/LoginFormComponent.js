import React from "react";

import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
} from "@chakra-ui/react";

const LoginFormComponent = (props) => {
    return (
        <>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    type={props.emailType}
                    id={props.idEmail}
                    value={props.emailValue}
                    onChange={props.mailChanhged}
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <p></p>

                <FormLabel>Password</FormLabel>
                <Input
                    type={props.passwordType}
                    value={props.password}
                    id={props.idPassword}
                    onChange={props.passwordChanged}
                />
                <p></p>
                <Button onClick={props.loginClicked}>LOGIN</Button>
            </FormControl>
        </>
    );
};

export default LoginFormComponent;
