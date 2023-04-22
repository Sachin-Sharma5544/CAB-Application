import { Badge, Icon } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import Aux from "../../HOC/AuxComponent";

function NotificationIcon({ count }) {
    return (
        <Aux>
            <Badge colorScheme="red" borderRadius="full" px={2}>
                {count}
            </Badge>
            <Icon
                as={BellIcon}
                boxSize={6}
                color={count > 0 ? "red.500" : "gray.500"}
                _hover={{ cursor: "pointer" }}
            />
        </Aux>
    );
}

export default NotificationIcon;
