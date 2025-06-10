import { IMessageModal } from "@ptypes/decisions/IMessageModal";
import { RequestStatus } from "src/enum/requestStatus";

interface ICancelRecord {
  showModal: boolean;
  messageCancel: IMessageModal;
  loading: boolean;
  status: RequestStatus;
  onToggleModal: () => void;
  onClick: () => void;
}

export type { ICancelRecord };
