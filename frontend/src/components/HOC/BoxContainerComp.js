import { Box } from "@chakra-ui/react";

const BoxContainer = (props) => {
    return <Box {...props}>{props.children}</Box>;
};

export default BoxContainer;
