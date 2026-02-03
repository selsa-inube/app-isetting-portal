import { IEntry } from "@ptypes/design/table/IEntry";
import { ILabel } from "@ptypes/details/ILabel";
interface ITraceabilityCard {
  data: IEntry;
  labels: ILabel[];
  isMobile: boolean;
}

export type { ITraceabilityCard };
