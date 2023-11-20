import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type SidebarState = {
  isOpen: boolean;
  isMinimal: boolean;
  onCloseSidebar: () => void;
  onToggleSidebar: () => void;
  onToggleMinimalSidebar: () => void;
};

export const useSidebarStore = create<SidebarState>()(
  immer((set) => ({
    isOpen: false,
    isMinimal: false,
    onCloseSidebar: () =>
      set((state) => {
        state.isOpen = false;
      }),
    onToggleSidebar: () =>
      set((state) => {
        state.isOpen = !state.isOpen;
      }),
    onToggleMinimalSidebar: () =>
      set((state) => {
        state.isMinimal = !state.isMinimal;
      }),
  }))
);
