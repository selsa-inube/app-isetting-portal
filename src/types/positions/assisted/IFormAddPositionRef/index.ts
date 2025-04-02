import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "../IGeneralInformationEntry";
import { IAssignmentFormEntry } from "@ptypes/positions/forms";

interface IFormAddPositionRef {
  generalInformation: React.RefObject<FormikProps<IGeneralInformationEntry>>;
}
type IHandleUpdateDataSwitchstep =
  | IGeneralInformationEntry
  | IAssignmentFormEntry[];
export type { IFormAddPositionRef, IHandleUpdateDataSwitchstep };
