import { IFormEntry } from "../IFormEntry";
import { IMenuOptions } from "@ptypes/design/IMenuOptions";
import { IOption } from "@inubekit/inubekit";
import { IToggleTableColumn } from "@design/forms/assignmentForm/tableGroup";

interface IAssignmentFormUI {
  filteredEntries: IFormEntry[];
  filterValue: string;
  isAssignAll: boolean;
  labelButtonNext: string;
  labelButtonPrevious: string;
  loading: boolean;
  menuOptions: IMenuOptions[];
  showMenu: boolean;
  smallScreen: boolean;
  fields?: IOption[];
  handleFilterInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggleAllEntries: (allocate: boolean) => void;
  handleToggleRol: () => void;
  onSelectCheckChange: (id: string) => void;
  onReset: () => void;
  onButtonClick: () => void;
  appliedFilters?: string;
  onFilterChange?: (name: string, values: string) => void;
  withFilter: boolean;
  filterTitle?: string;
  filterPlaceholder?: string;
  columnsTitles?: IToggleTableColumn[];
}

export type { IAssignmentFormUI };
