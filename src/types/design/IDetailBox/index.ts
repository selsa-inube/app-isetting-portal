import { IEntry } from "@ptypes/design/table/IEntry";
import { IAppearenceBorderStack } from "../IAppearenceBorderStack";

interface IDetailBox {
  field: { id: string; titleName: string };
  data: IEntry;
  id: number;
  width: string;
  borderRadius?: string;
  padding?: string;
  borderColor?: IAppearenceBorderStack;
  withTag?: boolean;
  ellipsis?: boolean;
}

export type { IDetailBox };
