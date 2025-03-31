import { IOption } from "@design/navigation/types";
import { IOptionItemChecked } from "@design/select/OptionItem";
import { IOptionInitialiceEntryApp } from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";

interface IFormEntry {
  id: string;
  value: string;
  abbreviatedName?: string;
  applicationName?: string;
  isActive: boolean;
  rolesStaff?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface IOptions {
  id: string;
  label: string;
  checked?: boolean;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IAssignmentForm {
  handleChange: (entries: IFormEntry[]) => void;
  entries: IFormEntry[];
  title: string;
  setSelectedToggle: React.Dispatch<
    React.SetStateAction<IFormEntry[] | undefined>
  >;
  readOnly?: boolean;
  setChangedData?: (changeData: IFormEntry[]) => void;
  changeData?: IFormEntry[];
  options: IOptionInitialiceEntryApp[];
}

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

const titlesOptions = [
  {
    id: "id",
    titleName: "",
    priority: 0,
    value: "isActive",
    type: "toggle",
  },
  {
    id: "abbreviatedName",
    titleName: "Rol",
    priority: 1,
    value: "abbreviatedName",
  },
];
export { titlesOptions };
export type { IFormEntry, IOptions, IAssignmentFormUI, IAssignmentForm };
