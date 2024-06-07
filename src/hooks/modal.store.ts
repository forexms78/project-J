import { create } from "zustand";

interface IModalStore {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const useModalStore = create<IModalStore>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}));

export const useModalStore2 = create<IModalStore>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}));

export const useModalStore3 = create<IModalStore>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}));

export const useModalStore4 = create<IModalStore>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}));
