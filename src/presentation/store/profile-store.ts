import { create } from "zustand";



export interface ProfileState {
    name: string;
    email: string;

    changeProfile: (name: string, email: string) => void;
};

export const useProfileStore = create<ProfileState>()((set, get) => ({
    name: 'abel amieva',
    email: 'amieva@amieva.com',
    changeProfile(name, email) {
        set({ name, email });
    },

}));