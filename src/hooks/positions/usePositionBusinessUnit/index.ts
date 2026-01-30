import { create } from "zustand";

type Store = {
  businessUnitCode: string;
  setBusinessUnitCode: (v: string) => void;
};
const useStore = create<Store>((set) => ({
  businessUnitCode: "",
  setBusinessUnitCode: (v) => set({ businessUnitCode: v }),
}));

export { useStore };
