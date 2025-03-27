// stores/userStore.ts
import { User } from '@/types/types';
import { create } from 'zustand';


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