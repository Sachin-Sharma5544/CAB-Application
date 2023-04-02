import { Box } from "@chakra-ui/react";

const BoxContainer = (props) => {
    return <Box {...props.styles}>{props.children}</Box>;
};

export default BoxContainer;
