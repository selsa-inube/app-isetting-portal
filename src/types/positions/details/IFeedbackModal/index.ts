import { IAction } from "@ptypes/interactiveModal/IAction";
import { IField } from "@ptypes/interactiveModal/IField";
import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IEntry } from "@ptypes/design/table/IEntry";
interface IFeedbackModal {
  onClose: () => void;
  smallScreen: boolean;
  labels: IField[];
  infoData: IPosition;
  title?: string;
  actions?: IAction[];
  dataTable?: IEntry[];
  actionsTitle?: string;
}

export type { IFeedbackModal };
