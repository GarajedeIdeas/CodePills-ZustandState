import { create } from "zustand";

export interface User {
    username: string;
    password: string;
    email: string;
    role: string;
}

type AuthStore = {
    logged: boolean;
    user: User | null;

    changeLogged: () => void;
    setUser: (newUser: User) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    logged: false,
    user: null,
    changeLogged: () => {
        set((state) => ({
            logged: !state.logged
        }))
    },
    setUser: (newUser: User) => {
        set(() => ({
            user: newUser
        }))
    }
}));