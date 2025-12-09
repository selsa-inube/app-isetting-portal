import { IFormEntry } from "../IFormEntry";
import { IMenuOptions } from "@ptypes/design/IMenuOptions";
import { IOption } from "@inubekit/inubekit";
import { IToggleTableColumn } from "@design/forms/assignmentForm/tableGroup";

interface IAssignmentForm {
  filteredRows: IFormEntry[];
  filterValue: string;
  formFields?: IOption[];
  handleFilterInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggleAllEntries: (allocate: boolean) => void;
  handleToggleRol: () => void;
  isAssignAll: boolean;
  labelButtonNext: string;
  labelButtonPrevious: string;
  loading: boolean;
  menuOptions: IMenuOptions[];
  onButtonClick: () => void;
  onHandleSelectCheckChange: (id: string) => void;
  onReset: () => void;
  showMenu: boolean;
  smallScreen: boolean;
  withFilter: boolean;
  appliedFilters?: string;
  handleFilterChange?: (name: string, values: string) => void;
  filterTitle?: string;
  filterPlaceholder?: string;
  columnsTitles?: IToggleTableColumn[];
}

export type { IAssignmentForm };
