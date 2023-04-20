import React from "react";

const useWhatsApp = () => {
    const sendCustomerWhatsappMessage = async () => {
        const response = await fetch(
            "https://graph.facebook.com/v16.0/100582823026288/messages",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer " + process.env.REACT_APP_MESSAGE_KEY,
                },
                body: JSON.stringify({
                    messaging_product: "whatsapp",
                    to: "918356930894",
                    type: "template",
                    template: {
                        name: "hello_world",
                        language: { code: "en_US" },
                    },
                }),
            }
        );

        const json = await response.json();
    };

    const sendDriverWhatsappMessage = async () => {
        const response = await fetch(
            "https://graph.facebook.com/v16.0/100582823026288/messages",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer " + process.env.REACT_APP_MESSAGE_KEY,
                },
                body: JSON.stringify({
                    messaging_product: "whatsapp",
                    to: "919305761967",
                    type: "template",
                    template: {
                        name: "hello_world",
                        language: { code: "en_US" },
                    },
                }),
            }
        );

        const json = await response.json();
    };

    return { sendCustomerWhatsappMessage, sendDriverWhatsappMessage };
};

export default useWhatsApp;
