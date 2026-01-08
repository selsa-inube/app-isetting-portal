import { FormikProps } from "formik";
import { IOfficialInChargeEntry } from "../IOfficialInChargeEntry";
import { IReasonAndCoverageEntry } from "../IReasonAndCoverageEntry";

interface IAddAssignmentsRef {
  officialInCharge: React.RefObject<FormikProps<IOfficialInChargeEntry> | null>;
  reasonAndCoverage: React.RefObject<FormikProps<IReasonAndCoverageEntry> | null>;
}

export type { IAddAssignmentsRef };
