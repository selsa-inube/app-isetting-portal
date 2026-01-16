import { IOption } from "@inubekit/inubekit";
import { IEntry } from "@ptypes/design/table/IEntry";
import { FormikValues } from "formik";

interface IAssigmentsTabUI {
  entries: IEntry[];
  loading: boolean;
  searchAssingments: string;
  smallScreen: boolean;
  columnWidths: number[];
  pageLength: number;
  emptyDataMessage: string;
  showModal: boolean;
  isActiveChecked: boolean;
  absentOfficialOptions: IOption[];
  formik: FormikValues;
  disabledButtonModal: boolean;
  disabledButton: boolean;
  showInfoModal: boolean;
  handleToggleInfoModal: () => void;
  onSelectChange: (name: string, value: string) => void;
  onSelectCheckChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickModal: () => void;
  onToggleModal: () => void;
  setEntryDeleted: (id: string | number) => void;
  onSearchAssingments: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IAssigmentsTabUI };
