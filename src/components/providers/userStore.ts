// stores/userStore.ts
import { create } from 'zustand';

interface User {
    id: string;
    name: string;
    email: string;
    role: number;
    balance: number;
    // Add other fields as needed
}

interface UserStore {
    normalUser: User | null;
    setNormalUser: (user: User) => void;
    clearNormalUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
    normalUser: null,
    setNormalUser: (user) => set({ normalUser: user }),
    clearNormalUser: () => set({ normalUser: null }),
}));

export default useUserStore;