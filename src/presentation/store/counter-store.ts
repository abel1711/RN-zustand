import { create } from "zustand";



export interface CounterState {
    count: number;

    incrementBy: (value: number) => void;
    resetCount: () => void;
}

export const useCounterStore = create<CounterState>()((set, get) => ({
    count: 0,
    incrementBy: (value) => {
        set({ count: get().count + value });
    },
    resetCount() {
        set({ count: 0 })
    },

}))