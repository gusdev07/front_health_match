import { create } from 'zustand';

interface User {
  username: string;
  email: string;
  roleId: number;
}

const InitialUserState = {
  username: '',
  email: '',
  roleId: 0,
};

interface useLoggedUserStoreState {
  user: User;
  setUser: (user: User) => void;
  logout: () => void;
}

const useLoggedUserStore = create<useLoggedUserStoreState>((set) => ({
  user: InitialUserState,

  setUser: (user: User) => set({ user }),

  logout: () => set({ user: InitialUserState }),
}));

export default useLoggedUserStore;
