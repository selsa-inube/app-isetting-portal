import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";
import { IOfficialInChargeEntry } from "../IOfficialInChargeEntry";

interface IAddAssignmentForms {
  officialInCharge: { isValid: boolean; values: IOfficialInChargeEntry };
  businessUnitOfficial: { isValid: boolean; values: IBusinessEntry[] };
}

export type { IAddAssignmentForms };
