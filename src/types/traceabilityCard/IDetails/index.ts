import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IField } from "@ptypes/positions/details/IField";
import { IEntry } from "@ptypes/design/table/IEntry";
import { ITab } from "@inubekit/inubekit";
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

  title: string;
  isSelectedRequest: string;
  showTrazabilityData: boolean;
  showErrorData: boolean;
  onTabRequestChange: (id: string) => void;
  filteredTabs: ITab[];
}

export type { IDetails };
