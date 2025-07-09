import { IFilterTag } from "@isettingkit/business-rules";
import { IFields } from "@ptypes/IFields";
import { IFormEntry } from "../IFormEntry";
import { IMenuOptions } from "@ptypes/design/IMenuOptions";

interface IAssignmentFormUI {
  filter: string;
  filteredEntries: IFormEntry[];
  filterValue: string;
  isAssignAll: boolean;
  isDisabledButton: boolean;
  labelButtonNext: string;
  labelButtonPrevious: string;
  loading: boolean;
  menuOptions: IMenuOptions[];
  showMenu: boolean;
  smallScreen: boolean;
  fields: IFields[];
  showFilter: boolean;
  showFilterModal: boolean;
  handleCloseMenuRol: () => void;
  handleFilterInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggleAllEntries: (allocate: boolean) => void;
  handleToggleRol: () => void;  
  onSelectCheckChange: (id: string) => void;
  onReset: () => void;
  onButtonClick: () => void; 
  appliedFilters?: IFilterTag[]; 
  onApply?: () => void;
  onFilterChange?: (name: string, values: string) => void;
  handleClearFilters: () => void;
  handleToggleModal?: () => void;
}

export type { IAssignmentFormUI };
