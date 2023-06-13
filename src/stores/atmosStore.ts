import { create } from "zustand";

interface IAtmosStore {
    text: string;
    changeText: (nextText: string) => void;
    isLoading: boolean;
    changeIsLoading: (nextIsLoading: boolean) => void;
}

const useAtmosStore = create<IAtmosStore>(set => ({
    text: "",
    changeText: (nextText: string) =>
        set(state => ({
            ...state,
            text: nextText,
        })),
    isLoading: false,
    changeIsLoading: (nextIsLoading: boolean) =>
        set(state => ({
            ...state,
            isLoading: nextIsLoading,
        })),
}));

export default useAtmosStore;
