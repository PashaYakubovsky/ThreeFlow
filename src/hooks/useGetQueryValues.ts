import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAppStore, { Control } from "../stores/appStore";

export const useGetQueryValues = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = Object.fromEntries(searchParams.entries());
    const changeDebug = useAppStore(state => state.changeDebug);
    const changeControl = useAppStore(state => state.changeControl);

    useEffect(() => {
        changeDebug(query.debug === "true");
        changeControl((query.control as Control) ?? "orbit");
    }, []);

    return query;
};
