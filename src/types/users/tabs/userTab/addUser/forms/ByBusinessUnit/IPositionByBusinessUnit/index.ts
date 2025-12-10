import { IOption } from "@inubekit/inubekit";

interface IPositionByBusinessUnit {
  options: IOption[];
  value: string;
}

type PositionsByBusinessUnitMap = Record<string, IPositionByBusinessUnit>;
export type { IPositionByBusinessUnit, PositionsByBusinessUnitMap };
