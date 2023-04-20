import React, { useState } from "react";

const useSearchCabs = () => {
    const [availableCabs, setAvailableCabs] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const searchCabs = async () => {
        const response = await fetch("http://localhost:3501/ride/available");
        const json = await response.json();
        if (response.ok) {
            setIsLoading(false);
            setAvailableCabs(json);
        }

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
    };

    return { searchCabs };
};

export default useSearchCabs;
