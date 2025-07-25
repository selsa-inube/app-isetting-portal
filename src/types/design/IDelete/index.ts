import { IMessageModal } from "@ptypes/decisions/IMessageModal";

interface IDelete {
  showModal: boolean;
  messageDelete: IMessageModal;
  onToggleModal: () => void;
  onClick: () => void;
  loading: boolean;
  setJustificationDelete?: (value: string) => void;
  withText?: boolean;
}

export type {IDelete}