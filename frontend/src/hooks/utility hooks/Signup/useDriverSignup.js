import React, { useState } from "react";

import useDriverAuthContext from "../../context hooks/Authentication/useDriverAuthContext";

const useDriverSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const { dispatch } = useDriverAuthContext();

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(false);

        const response = await fetch("http://localhost:3501/driver/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(true);
            setError(json.error);
        }

        if (response.ok) {
            localStorage.setItem("RideSmart_User", JSON.stringify(json));
            dispatch({ type: "LOGIN", payload: json });
            setIsLoading(false);
            setError(null);
        }
    };

    return { signup, isLoading, error };
};

export default useDriverSignup;
