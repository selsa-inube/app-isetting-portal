import { IEntry } from "@ptypes/table/IEntry";
import { ILabel } from "@ptypes/details/ILabel";
interface IRenderDetailBox {
  field: ILabel;
  id: number;
  data: IEntry;
  isMobile: boolean;
  withTag?: boolean;
}

export type { IRenderDetailBox };
