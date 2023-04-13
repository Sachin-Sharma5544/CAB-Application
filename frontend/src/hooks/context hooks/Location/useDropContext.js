import { DropLocationContext } from "../../../context/DropLocationContext";
import { useContext } from "react";

export const useDropContext = () => {
    const context = useContext(DropLocationContext);
    if (!context) {
        throw Error("useDropContext must me used inside a DropContextProvider");
    }

    return context;
};
