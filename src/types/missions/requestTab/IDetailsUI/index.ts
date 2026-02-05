import { ITab } from "@inubekit/inubekit";
import { ILabel } from "@ptypes/ILabel";
import { IEntry } from "@ptypes/design/table/IEntry";

interface IDetailsUI {
  data: IEntry;
  filteredTabs: ITab[];
  isMobile: boolean;
  isSelectedRequest: string;
  screenTablet: boolean;
  showErrorData: boolean;
  showModal: boolean;
  showTrazabilityData: boolean;
  title: string;
  labelsOfRequest: ILabel[];
  showMoreDetailsModal: boolean;
  normalizeDetails: IEntry;
  onMoreDetails: () => void;
  onTabRequestChange: (id: string) => void;

  onToggleModal: () => void;
}

export type { IDetailsUI };
