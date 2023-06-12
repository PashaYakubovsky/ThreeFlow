import { create } from "zustand";
import { getDog, getFox, getShibes } from "../libs/api";

export enum AvailableApis {
    getShibes = "getShibes",
    getDogs = "getDogs",
    getFoxes = "getFoxes",
}

export type Control = "orbit" | "point";

interface IAppStore {
    currentApi: AvailableApis;
    response: string;
    debug: boolean;
    apiCall: (api: AvailableApis) => Promise<void>;
    changeCurrentApi: (nextApi: AvailableApis) => void;
    isLoading: boolean;
    changeDebug: (nextDebug: boolean) => void;
    control: Control;
    changeControl: (nextControl: Control) => void;
}

const useAppStore = create<IAppStore>(set => ({
    currentApi: AvailableApis.getFoxes,
    changeCurrentApi: (nextApi: AvailableApis) =>
        set(state => ({
            ...state,
            currentApi: nextApi,
        })),
    response: ``,
    isLoading: false,
    debug: false,
    control: "orbit",
    changeControl: (nextControl: Control) =>
        set(state => ({
            ...state,
            control: nextControl,
        })),
    changeDebug: (nextDebug: boolean) =>
        set(state => ({
            ...state,
            debug: nextDebug,
        })),
    apiCall: async (currentApi: AvailableApis) => {
        set(state => ({ ...state, isLoading: true }));

        if (currentApi === AvailableApis.getShibes) {
            const shibies = await getShibes(1);
            set(state => ({ ...state, response: JSON.stringify(shibies) }));
        }
        if (currentApi === AvailableApis.getDogs) {
            const dogs = await getDog();
            set(state => ({ ...state, response: JSON.stringify(dogs) }));
        }
        if (currentApi === AvailableApis.getFoxes) {
            const foxes = await getFox();
            set(state => ({ ...state, response: JSON.stringify(foxes) }));
        }

        set(state => ({ ...state, isLoading: false }));
    },
}));

export default useAppStore;
