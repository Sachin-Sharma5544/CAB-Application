import { useState } from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    ModalBody,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ModalComponent(props) {
    return (
        <>
            <Modal
                isOpen={props.onOpen}
                onClose={props.onClose}
                className="myLoginModal"
            >
                <ModalOverlay />
                <ModalContent className="myLoginModal">
                    <ModalHeader>Like to Login as </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            If you are looking for a ride, request you to please
                            login as customer.
                        </Text>
                        <Text>
                            In case you are our Driving Partner, request you to
                            please login as driver
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            onClick={props.onClose}
                            mr={135}
                            as={Link}
                            to="/customer/login"
                        >
                            Customer
                        </Button>
                        <Button
                            colorScheme="blue"
                            onClick={props.onClose}
                            mr={10}
                            as={Link}
                            to="/driver/login"
                        >
                            Driver
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
export default ModalComponent;
