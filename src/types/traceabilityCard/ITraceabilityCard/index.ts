import { IEntry } from "@ptypes/table/IEntry";
import { ILabel } from "@ptypes/details/ILabel";
interface ITraceabilityCard {
  data: IEntry;
  labels: ILabel[];
  isMobile: boolean;
}

export type { ITraceabilityCard };
