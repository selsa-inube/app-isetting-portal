import { IEntry } from "@ptypes/table/IEntry";
import { IBorder } from "../IBorder";

interface IDetailBox {
  field: { id: string; titleName: string };
  data: IEntry;
  id: number;
  width: string;
  borderRadius?: string;
  padding?: string;
  borderColor?: IBorder;
  withTag?: boolean;
  ellipsis?: boolean;
}

export type { IDetailBox };
