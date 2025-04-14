import { ILabel } from "@ptypes/details/ILabel";
import { IEntry } from "@ptypes/table/IEntry";
interface IRequestDetailBoxes {
  labels: ILabel[];
  data: IEntry;
  isMobile: boolean;
}

export type { IRequestDetailBoxes };
