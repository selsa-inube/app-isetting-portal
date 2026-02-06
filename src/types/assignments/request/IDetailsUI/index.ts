import { ITab } from "@inubekit/inubekit";
import { IEntry } from "@ptypes/design/table/IEntry";
import { ILabel } from "@ptypes/ILabel";

interface IDetailsUI {
  data: IEntry;
  isMobile: boolean;
  showModal: boolean;
  showMoreDetailsModal: boolean;
  screenTablet: boolean;
  abbreviatedName: string;
  normalizeDataMoreDetails: IEntry;
  labelsOfRequestDetails: ILabel[];
  title: string;
  smallScreen: boolean;
  pageLength: number;
  columnWidths: number[];
  handleMoreDetails: () => void;
  onTabChange: (id: string) => void;
  onToggleModal: () => void;

  isSelectedRequest: string;
  showTrazabilityData: boolean;
  showErrorData: boolean;
  onTabRequestChange: (id: string) => void;
  filteredTabs: ITab[];
}

export type { IDetailsUI };
