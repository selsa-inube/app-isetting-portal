import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";
import { IOfficialInChargeEntry } from "../IOfficialInChargeEntry";
import { IRolesByUnitEntry } from "../IRolesByUnitEntry";

interface IAddAssignmentForms {
  officialInCharge: { isValid: boolean; values: IOfficialInChargeEntry };
  businessUnitOfficial: { isValid: boolean; values: IBusinessEntry[] };
  rolesByBusinessUnits: {isValid: boolean; values: IRolesByUnitEntry[] }
}

export type { IAddAssignmentForms };
