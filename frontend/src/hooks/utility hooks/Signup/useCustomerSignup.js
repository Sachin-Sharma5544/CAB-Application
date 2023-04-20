import React, { useState } from "react";

import useCustomerAuthContext from "../../context hooks/Authentication/useCustomerAuthContext";

const useCustomerSignup = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const { dispatch } = useCustomerAuthContext();

    const signup = async (fname, lname, email, password) => {
        setIsLoading(true);
        setError(false);

        const response = await fetch("http://localhost:3501/customer/signup", {
            method: "POST",
            body: JSON.stringify({ fname, lname, email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
            console.log(json.error);
        }

        if (response.ok) {
            //setting localstorage
            localStorage.setItem("RideSmart_User", JSON.stringify(json));

            dispatch({ type: "LOGIN", payload: json });
            setIsLoading(false);
            setError(null);
        }
    };

    return { signup, isLoading, error };
};

export default useCustomerSignup;
