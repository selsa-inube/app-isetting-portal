import { IAction } from "@ptypes/interactiveModal/IAction";
import { IField } from "@ptypes/interactiveModal/IField";
import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IEntry } from "@ptypes/table/IEntry";
interface IDetailsMissionModalUI {
  onClose: () => void;
  smallScreen: boolean;
  labels: IField[];
  infoData: IPosition;
  hasLabels: boolean;
  hasActions: boolean;
  isMobile: boolean;
  actions?: IAction[];
  dataTable?: IEntry[];
  actionsTitle?: string;
}

export type { IDetailsMissionModalUI };
