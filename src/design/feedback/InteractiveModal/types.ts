import { IPosition } from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";
import { IEntry } from "@ptypes/table/IEntry";

type ModalTypes = "fields" | "search";

interface IField {
  id: string;
  labelName: string;
  type?: string;
}

interface IAction {
  id: string;
  content:
    | string
    | ((data: {
        [key: string]: string | number | boolean | React.ReactNode;
      }) => React.ReactNode);
}

interface InteractiveModalProps {
  closeModal: () => void;
  infoData: IPosition;
  portalId: string;
  title: string;
  actionsTitle?: string;
  actions?: IAction[];
  divider?: boolean;
  id?: string;
  idLabel?: string;
  infoTitle?: string;
  dataTable?: IEntry[];
  label?: string;
  labels?: IField[];
  name?: string;
  nameLabel?: string;
  onClick?: string;
  placeholder?: string;
  searchData?:
    | { [key: string]: string }
    | Record<string, string | number | unknown>[];
  selectedItem?: string;
  setValidateCardRemoved?: React.Dispatch<React.SetStateAction<boolean>>;
  type?: ModalTypes;
}

export type { IField, IAction, InteractiveModalProps, ModalTypes };
