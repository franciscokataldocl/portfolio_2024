import { create } from 'zustand';

const defaultMenu:string[] = ['HOME', 'SOBRE MI', 'PROYECTOS', 'CONTACTO'];
interface MenuState {
    isOpen: boolean,
    change: () => void;
    menuItems: string[]
  }

  export const useMenuStore = create<MenuState>((set) => ({
    isOpen: false,
    change: () => set((state) => ({ isOpen: !state.isOpen })),
    menuItems: defaultMenu
  }));