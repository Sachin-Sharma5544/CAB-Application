import React from "react";

import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
} from "@chakra-ui/react";

const SignupFormComponent = (props) => {
    return (
        <>
            <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                    type="text"
                    id={props.idFname}
                    value={props.fnameValue}
                    onChange={props.fnameChanged}
                />
                <p></p>
                <FormLabel>Last Name</FormLabel>
                <Input
                    type="text"
                    id={props.idLname}
                    value={props.lnameValue}
                    onChange={props.lnameChanged}
                />
                <p></p>
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
                <Button onClick={props.loginClicked} disabled={props.isLoading}>
                    SIGN UP
                </Button>
            </FormControl>
        </>
    );
};

export default SignupFormComponent;
