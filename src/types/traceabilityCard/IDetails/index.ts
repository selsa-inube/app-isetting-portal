import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IField } from "@ptypes/positions/details/IField";
import { IEntry } from "@ptypes/table/IEntry";
interface IDetails {
  data: IEntry;
  showModal: boolean;
  onToggleModal: () => void;
  showMoreMission: boolean;
  isMobile: boolean;
  onToggleMoreDetailsModal: () => void;
  labels: IField[];
  infoData: IPosition;
  dataTable?: IEntry[];
}

export type { IDetails };
