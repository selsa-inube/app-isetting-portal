import { IEntry } from "@ptypes/design/table/IEntry";
import { ILabel } from "@ptypes/details/ILabel";
interface ITraceabilitySection {
  traceability: IEntry[];
  isMobile: boolean;
  labels: ILabel[];
}

export type { ITraceabilitySection };
