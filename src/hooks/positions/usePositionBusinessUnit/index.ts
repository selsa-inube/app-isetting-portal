import { create } from "zustand";

type IStore = {
  businessUnitCode: string;
  setBusinessUnitCode: (value: string) => void;
};
const useStore = create<IStore>((set) => ({
  businessUnitCode: "",
  setBusinessUnitCode: (value) => set({ businessUnitCode: value }),
}));

export { useStore };
