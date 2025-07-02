import { IFilterTag } from "@isettingkit/business-rules";
import { IFormEntry } from "../IFormEntry";
import { IFields } from "@ptypes/IFields";
import { IOption } from "@ptypes/navigation/IOption";

interface IAssignmentForm {
   appliedFilters: IFilterTag[];
    filteredRows: IFormEntry[];
    filterValue: string;
    formFields: IFields[];
    handleApply: () => void;
    handleClear: () => void;
    handleCloseMenuRol: () => void;
    handleFilterChange: (name: string, values: string) => void
    handleFilterInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleToggleAllEntries: (allocate: boolean) => void;
    handleToggleModal: () => void;
    handleToggleRol: () => void;
    isAssignAll: boolean;
    isDisabledButton: boolean;
    labelButtonNext: string;
    labelButtonPrevious: string;
    loading:boolean;
    menuOptions: IOption[];
    onButtonClick: () => void;
    onHandleSelectCheckChange: (id: string) => void;
    onReset: () => void;
    showMenu: boolean;
    showModal: boolean;
    smallScreen: boolean;
    withFilter: boolean;
}

export type { IAssignmentForm };
