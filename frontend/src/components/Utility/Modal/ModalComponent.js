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
                    <ModalHeader>{props.modalHeader} </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>{props.modalText1}</Text>
                        <Text>{props.modalText2}</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            onClick={() => {
                                props.onClose();
                            }}
                            mr={135}
                            as={Link}
                            to={props.path1}
                        >
                            Customer
                        </Button>
                        <Button
                            colorScheme="blue"
                            onClick={() => {
                                props.onClose();
                            }}
                            mr={10}
                            as={Link}
                            to={props.path2}
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
