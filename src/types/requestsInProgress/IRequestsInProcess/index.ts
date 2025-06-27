import { ILabel } from "@ptypes/details/ILabel";
import { IEntry } from "@ptypes/table/IEntry";
interface IRequestsInProcess {
  data: IEntry;
  labelsOfRequest: ILabel[];
  labelsOfTraceability: ILabel[];
  isMobile: boolean;
  title?: string;
  onCloseModal: () => void;
  onClick?: () => void;
}

export type { IRequestsInProcess };
