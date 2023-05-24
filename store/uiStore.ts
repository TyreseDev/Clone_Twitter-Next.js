import { create } from "zustand";

export const useUiStore = create((set, get) => ({
  isModalLoaded: false,
  isSignInModal: true,
  isModalCloseOnce: false,
  toggleIsModalLoaded: () => set({ isModalLoaded: true }),
  toggleIsSignInModal: (valueLoaded: boolean) =>
    set({ isSignInModal: valueLoaded }),
  toggleIsModalCloseOnce: () => set({ isModalCloseOnce: true }),
}));
