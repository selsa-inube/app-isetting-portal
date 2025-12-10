import { FormikProps } from "formik";
import { IOfficialInChargeEntry } from "../IOfficialInChargeEntry";
import { IReasonAndCoverageEntry } from "../IReasonAndCoverageEntry";

interface IAddAssignmentsRef {
  officialInCharge: React.RefObject<FormikProps<IOfficialInChargeEntry>>;
reasonAndCoverage: React.RefObject<FormikProps<IReasonAndCoverageEntry>>;
}

export type { IAddAssignmentsRef };
