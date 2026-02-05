import { IAction } from "../IAction";

type ModalTypes = "fields" | "search";
interface IInteractiveModal {
  portalId: string;
  closeModal?: () => void;
  width?: string;
  height?: string;
  infoText?: string;
  title?: string;
  children?: React.ReactNode;
  actionsTitle?: string;
  actions?: IAction[];
  id?: string;
  label?: string;
  name?: string;
  onClick?: () => void;
  placeholder?: string;
  setValidateCardRemoved?: React.Dispatch<React.SetStateAction<boolean>>;
  type?: ModalTypes;
  overflowY?: string;
}

export type { IInteractiveModal };
