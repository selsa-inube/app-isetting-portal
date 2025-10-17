import { IMissionForStaff } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IMissionForStaff";
import { FormikProps } from "formik";

interface IUseAddUserMissionForStaffStep {
  initialValues: IMissionForStaff;
  ref: React.ForwardedRef<FormikProps<IMissionForStaff>>;
  onSubmit: ((values: IMissionForStaff) => void) | undefined;
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  editDataOption?: boolean;
  loading?: boolean;
}
export type { IUseAddUserMissionForStaffStep };
