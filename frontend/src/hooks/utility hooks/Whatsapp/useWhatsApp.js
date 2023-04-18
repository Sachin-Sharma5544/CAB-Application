import React from "react";

const useWhatsApp = () => {
    const sendWhatsappMessage = async () => {
        const response = await fetch(
            "https://graph.facebook.com/v16.0/100582823026288/messages",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer " + process.env.REACT_APP_MESSAGE_KEY,
                    // Authorization:
                    // "Bearer EAAHlNkRrxOcBALJo2zcTZBQtN8fpsLha5v7yYQltAQgZCGY3pP58DzbjGb5T4sZCSP9TgW5NZCxEoSm6g72zDAQ4Dkbuf9LULVuDvTJZALrkZAZAzM0hriT7HzKim2Xi4zLf4Iyko1ZAYVb4bU5TdL1MJIos4NyWcsUWKKV8qzYAOJB4HxZAqilETZAZBF5pM54XIZCukE4tZB7EqmwZDZD",
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

        if (response.ok) {
            console.log("done");
            console.log(process.env.REACT_APP_MESSAGE_KEY);
        }
    };

    return { sendWhatsappMessage };
};

export default useWhatsApp;
