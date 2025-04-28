import { create } from 'zustand';

interface PasswordState {
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
}

export const usePasswordVisibleStore = create<PasswordState>((set) => ({
  isPasswordVisible: false,
  togglePasswordVisibility: () => set((state) => ({ isPasswordVisible: !state.isPasswordVisible })),
}));
