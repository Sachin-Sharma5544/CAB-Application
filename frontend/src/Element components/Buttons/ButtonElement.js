import { Button } from "@chakra-ui/react";

const ButtonElement = (props) => {
    return <Button {...props}>{props.children}</Button>;
};

export default ButtonElement;
