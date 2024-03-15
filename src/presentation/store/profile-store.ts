import { create } from "zustand";



export interface ProfileState {
    name: string;
    email: string;
};

export const useProfileStore = create<ProfileState>()((set, get) => ({
    name: 'abel amieva',
    email: 'amieva@amieva.com',

}));