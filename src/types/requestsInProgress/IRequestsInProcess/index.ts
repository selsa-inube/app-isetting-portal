import { ITab } from "@inubekit/inubekit";
import { ILabel } from "@ptypes/ILabel";
import { IEntry } from "@ptypes/design/table/IEntry";

interface IRequestsInProcess {
  data: IEntry;
  title: string;
  labelsOfRequest: ILabel[];
  labelsOfTraceability: ILabel[];
  isMobile: boolean;
  isSelected: string;
  filteredTabs: ITab[];
  showTrazabilityData: boolean;
  showErrorData: boolean;
  onTabChange: (id: string) => void;
  onCloseModal: () => void;
  onClick: () => void;
}

export type { IRequestsInProcess };
