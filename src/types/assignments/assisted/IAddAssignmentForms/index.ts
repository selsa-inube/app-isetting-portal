import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";
import { IOfficialInChargeEntry } from "../IOfficialInChargeEntry";
import { IRolesByUnitEntry } from "../IRolesByUnitEntry";
import { IReasonAndCoverageEntry } from "../IReasonAndCoverageEntry";

interface IAddAssignmentForms {
  officialInCharge: { isValid: boolean; values: IOfficialInChargeEntry };
  businessUnitOfficial: { isValid: boolean; values: IBusinessEntry[] };
  rolesByBusinessUnits: { isValid: boolean; values: IRolesByUnitEntry[] };
  reasonAndCoverage: { isValid: boolean; values: IReasonAndCoverageEntry };
}

export type { IAddAssignmentForms };
