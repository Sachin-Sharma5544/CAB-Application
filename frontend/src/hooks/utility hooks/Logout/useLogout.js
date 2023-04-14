import React from "react";
import useCustomerAuthContext from "../../context hooks/Authentication/useCustomerAuthContext";
import useDriverAuthContext from "../../context hooks/Authentication/useDriverAuthContext";

const useLogout = () => {
    const { user: custUser, dispatch: custDispatch } = useCustomerAuthContext();
    const { user: drivUser, dispatch: drivDispatch } = useDriverAuthContext();

    const logout = () => {
        localStorage.removeItem("RideSmart_User");

        if (custUser.userType === "customer") {
            localStorage.removeItem("RideSmart_User");
            custDispatch({ type: "LOGOUT" });
        } else if (drivUser.userType === "driver") {
            localStorage.removeItem("RideSmart_User");
            drivDispatch({ type: "LOGOUT" });
        }
    };

    return { logout };
};

export default useLogout;
