import { IAllBusinessUnits } from "@ptypes/staffPortal/IAllBusinessUnits";

interface IUseGetBusinessUnits {
  businessUnits: IAllBusinessUnits[];
  token: string;
}

export type { IUseGetBusinessUnits };
