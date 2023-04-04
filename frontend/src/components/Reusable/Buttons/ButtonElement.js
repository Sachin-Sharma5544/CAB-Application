import { Button } from "@chakra-ui/react";

const ButtonElement = (props) => {
    return <Button onClick={props.handleClick}>{props.children}</Button>;
};

export default ButtonElement;
