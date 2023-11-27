import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type ProModalState = {
  isOpenProModal: boolean;
  onCloseProModal: () => void;
  onToggleProModal: () => void;
};

export const useProModalStore = create<ProModalState>()(
  immer((set) => ({
    isOpenProModal: false,
    onCloseProModal: () =>
      set((state) => {
        state.isOpenProModal = false;
      }),
    onToggleProModal: () =>
      set((state) => {
        state.isOpenProModal = !state.isOpenProModal;
      }),
  }))
);
