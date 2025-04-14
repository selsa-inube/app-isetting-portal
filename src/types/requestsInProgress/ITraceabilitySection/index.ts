import { IEntry } from "@ptypes/table/IEntry";
import { ILabel } from "@ptypes/details/ILabel";
interface ITraceabilitySection {
  traceability: IEntry[];
  isMobile: boolean;
  labels: ILabel[];
}

export type { ITraceabilitySection };
