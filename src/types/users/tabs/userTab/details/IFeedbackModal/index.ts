import { IField } from "@ptypes/interactiveModal/IField";
import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IEntry } from "@ptypes/table/IEntry";
interface IFeedbackModal {
  onClose: () => void;
  smallScreen: boolean;
  labels: Record<string, IField[]>;
  infoData: IPosition;
  dataTable?: IEntry[];
  positionsByBusinessUnitRoles?: IEntry[];
  rolesByBusinessUnit?: IEntry[];
}

export type { IFeedbackModal };
