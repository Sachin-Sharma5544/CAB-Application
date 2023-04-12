import React, { useState } from "react";
import Navbar from "../../components/Containers/Header/Navbar";
import ModalComponent from "../../components/Utility/Modal/ModalComponent";

const HeaderAllPages = () => {
    const [showModal, setShowmodal] = useState(false);
    const [modalType, setModalType] = useState(null);

    const displayModal = () => {
        setShowmodal(true);
    };

    const closeModal = () => {
        setShowmodal(false);
        setModalType(null);
    };

    return (
        <div>
            <Navbar displayModal={displayModal} setModalType={setModalType} />
            {modalType === "Login" && (
                <ModalComponent
                    onOpen={showModal}
                    onClose={closeModal}
                    modalHeader="Like to Login as"
                    modalText1="If you are looking for a ride, request you to please
                            login as customer."
                    modalText2="In case you are our
                            Driving Partner, request you to please login as
                            driver."
                    path1="/customer/login"
                    path2="/driver/login"
                ></ModalComponent>
            )}

            {modalType === "Signup" && (
                <ModalComponent
                    onOpen={showModal}
                    onClose={closeModal}
                    modalHeader="Like to Signup as"
                    modalText1="If you are looking to avail rides, request you to please
                            signup as customer."
                    modalText2="In case you are willing to become  our
                            Driving Partner, request you to please signup as
                            driver."
                    path1="/customer/signup"
                    path2="/driver/signup"
                ></ModalComponent>
            )}
        </div>
    );
};

export default HeaderAllPages;
