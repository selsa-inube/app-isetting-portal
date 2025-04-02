import { IOptionItemChecked } from "@design/select/OptionItem";
import { IOption } from "@ptypes/navigation/IOption";

import { IFormEntry } from "../IFormEntry";

interface IAssignmentFormUI {
  entries: IFormEntry[];
  filter: string;
  filteredRows: IFormEntry[];
  handleToggleRol: () => void;
  handleCloseMenuRol: () => void;
  filterValue: string;
  isAssignAll: boolean;
  menuOptions: IOption[];
  options: IOptionItemChecked[];
  showMenu: boolean;
  smallScreen: boolean;
  showModal: boolean;
  dataValidations: boolean;
  title: string;
  selectedOptions: IOptionItemChecked[];
  handleToggleModal: () => void;
  handleClearFilters: () => void;
  onSelectChange: (options: IOptionItemChecked[]) => void;
  setSelectedOptions: React.Dispatch<
    React.SetStateAction<IOptionItemChecked[]>
  >;
  handleClick: () => void;
  handleCloseMenuInvitation: () => void;
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (options: IOptionItemChecked[]) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleToggleAllEntries: (allocate: boolean) => void;
  handleToggleMenuInvitation: () => void;
  onHandleSelectCheckChange: (id: string) => void;
  handleFilterInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

export type { IAssignmentFormUI };
