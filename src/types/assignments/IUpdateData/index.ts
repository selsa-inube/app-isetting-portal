import { IOfficialInChargeEntry } from "../assisted/IOfficialInChargeEntry";
import { IReasonAndCoverageEntry } from "../assisted/IReasonAndCoverageEntry";
import { IRolesByUnitEntry } from "../assisted/IRolesByUnitEntry";
import { IBusinessEntry } from "../IBusinessEntry";

interface IFormsUpdateData {
  officialInCharge: { isValid: boolean; values: IOfficialInChargeEntry };
   businessUnitOfficial: { isValid: boolean; values: IBusinessEntry[] };
  rolesByBusinessUnits: { isValid: boolean; values: IRolesByUnitEntry[] };
  reasonAndCoverage: { isValid: boolean; values: IReasonAndCoverageEntry };
}

export type { IFormsUpdateData };
