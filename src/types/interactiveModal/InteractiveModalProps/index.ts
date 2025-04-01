import { IPosition } from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";
import { IField } from "../IField";
import { IAction } from "../IAction";
import { IEntry } from "@ptypes/table/IEntry";
type ModalTypes = "fields" | "search";
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

export type { InteractiveModalProps };
