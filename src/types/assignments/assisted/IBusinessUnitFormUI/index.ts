import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";
import { IMenuOptions } from "@ptypes/design/IMenuOptions";

interface IBusinessUnitFormUI {
  loading: boolean;
  isMobile: boolean;
  labelButtonPrevious: string;
  labelButtonNext: string;
  onButtonClick: () => void;
  onPreviousStep?: () => void;
  isDisabledButton?: boolean;
  menuOptions: IMenuOptions[];
  filteredEntries: IBusinessEntry[];
  isAssignAll: boolean;
  showMenu: boolean;
  searchBusinessUnit: string;
  onSearchBusinessUnit: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleUnits: () => void;
  onClose: () => void;
  onToggleAllEntries: (allocate: boolean) => void;
  onSelectCheckChange: (id: string) => void;
  editDataOption?: boolean;
}

export type { IBusinessUnitFormUI };
