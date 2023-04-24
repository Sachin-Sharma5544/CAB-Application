import {
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Aux from "../../HOC/AuxComponent";
import { useNavigate } from "react-router-dom";

const UserProfileIcon = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const homeClickHandler = () => {
        navigate("/customer/welcome");
    };

    const profileClickHandler = () => {
        console.log("Profile link clicked");
    };

    return (
        <Aux>
            <Avatar name={props.name} size="sm" marginTop="2" />
            <Menu backgroundColor="black">
                <MenuButton
                    as={Button}
                    variant="ghost"
                    onClick={toggleMenu}
                    rightIcon={<ChevronDownIcon />}
                    bg="black"
                    _hover="black"
                    _active="black"
                    fontSize="xl"
                >
                    {props.name}
                </MenuButton>
                <MenuList
                    bg="black"
                    marginTop={1}
                    border="none"
                    borderTopRadius="none"
                >
                    <MenuItem bg="black" onClick={homeClickHandler}>
                        Home
                    </MenuItem>
                    <MenuItem bg="black" onClick={profileClickHandler}>
                        Profile
                    </MenuItem>
                    <MenuItem bg="black" onClick={props.handleLogout}>
                        Logout
                    </MenuItem>
                </MenuList>
            </Menu>
        </Aux>
    );
};

export default UserProfileIcon;
