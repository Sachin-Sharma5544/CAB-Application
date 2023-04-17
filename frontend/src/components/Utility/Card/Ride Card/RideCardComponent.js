import React from "react";
import {
    Card,
    CardHeader,
    Heading,
    CardBody,
    CardFooter,
    Text,
    Button,
    Flex,
} from "@chakra-ui/react";
const RideCardComponent = () => {
    return (
        <Card border="1px solid black">
            <CardHeader>
                <Heading size="md"> Ride Details </Heading>
            </CardHeader>
            <CardBody>
                <Flex>
                    <Text>Pickup Location: </Text> &nbsp;
                    <Text>Karampura</Text>
                </Flex>
                <Flex>
                    <Text>Drop Location: </Text>&nbsp;
                    <Text>T3, Delhi</Text>
                </Flex>
            </CardBody>
            <CardFooter>
                <Button>View here</Button>
            </CardFooter>
        </Card>
    );
};

export default RideCardComponent;
