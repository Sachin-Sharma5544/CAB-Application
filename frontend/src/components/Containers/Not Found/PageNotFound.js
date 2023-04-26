import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import "./PageNotFound.css";

const PageNotFound = () => {
    return (
        <Box className="PageNotFound">
            <Heading>OOPS!!! The page you are looking for do not exist</Heading>
        </Box>
    );
};

export default PageNotFound;
