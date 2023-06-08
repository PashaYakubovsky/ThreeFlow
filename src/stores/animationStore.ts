import { create } from "zustand";

interface IAnimationStore {
    timeline: GSAPTimeline | null;
    changeTimeline: (nextTimeline: GSAPTimeline) => void;
}

const useAnimationStore = create<IAnimationStore>(set => ({
    timeline: null,
    changeTimeline: (nextTimeline: GSAPTimeline) =>
        set(state => ({
            ...state,
            timeline: nextTimeline,
        })),
}));

export default useAnimationStore;
