import useCustomerAuthContext from "../../context hooks/Authentication/useCustomerAuthContext";
import useDriverAuthContext from "../../context hooks/Authentication/useDriverAuthContext";

const useLogout = () => {
    const { user: custUser, dispatch: custDispatch } = useCustomerAuthContext();
    const { user: drivUser, dispatch: drivDispatch } = useDriverAuthContext();

    const logout = () => {
        if (custUser) {
            localStorage.removeItem("RideSmart_User");
            custDispatch({ type: "LOGOUT" });
        }

        if (drivUser) {
            localStorage.removeItem("RideSmart_User");
            drivDispatch({ type: "LOGOUT" });
        }
    };

    return { logout };
};

export default useLogout;
