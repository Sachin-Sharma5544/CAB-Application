import { useState } from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Link,
    ModalCloseButton,
} from "@chakra-ui/react";

function ModalComponent(props) {
    return (
        <>
            {/* <Link onClick={props.onOpen}>Login</Link> */}

            <Modal isOpen={props.onOpen} onClose={props.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />

                    <ModalFooter>
                        <Link colorScheme="blue" mr={3} onClick={props.onClose}>
                            Close
                        </Link>
                        <Link variant="ghost">Secondary Action</Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
export default ModalComponent;
