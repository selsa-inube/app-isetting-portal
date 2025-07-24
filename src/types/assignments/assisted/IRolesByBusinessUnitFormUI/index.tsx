import { IRolesByUnitEntry } from "../IRolesByUnitEntry";

interface IRolesByBusinessUnitFormUI {
  isMobile: boolean;
  labelButtonNext: string;
  labelButtonPrevious: string;
  loading: boolean;
  isDisabledButton: boolean;
  rolesByBusinessUnit: IRolesByUnitEntry[];
  onToggleAllEntries: (id: string) => void;
  onSelectCheckChange: (id: string) => void;
  onPreviousStep: () => void;
  onButtonClick: () => void;
}

export type { IRolesByBusinessUnitFormUI };
