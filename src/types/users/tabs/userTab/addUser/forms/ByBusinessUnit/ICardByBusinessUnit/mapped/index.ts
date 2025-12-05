import { IPositionByBusinessUnit } from "../../IRoleByBusinessUnit";
import { IRoleByBusinessUnit } from "../IRoleByBusinessUnit";

interface IRolesByBusinessMapped {
  rolesByBusinessUnits: Record<string, IRoleByBusinessUnit>;
  positionsByBusinessUnit: Record<string, IPositionByBusinessUnit>;
}
export type { IRolesByBusinessMapped };
