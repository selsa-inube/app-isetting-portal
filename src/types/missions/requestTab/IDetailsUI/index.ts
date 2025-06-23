
import { ILabel } from "@ptypes/ILabel";
import { IEntry } from "@ptypes/table/IEntry";

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
  titleMoreDet?: string;
  handleMoreDetails: () => void;
  onTabChange: (id: string) => void;
  onToggleModal: () => void;
}

export type { IDetailsUI };
