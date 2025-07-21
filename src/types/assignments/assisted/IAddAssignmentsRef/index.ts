import { FormikProps } from "formik";
import { IOfficialInChargeEntry } from "../IOfficialInChargeEntry";

interface IAddAssignmentsRef {
  officialInCharge: React.RefObject<FormikProps<IOfficialInChargeEntry>>;
}

export type { IAddAssignmentsRef };
