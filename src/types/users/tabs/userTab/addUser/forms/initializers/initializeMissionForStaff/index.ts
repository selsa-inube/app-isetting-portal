import { IMissionForStaff } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IMissionForStaff";

interface IMissionForStaffForm {
  initialValues: IMissionForStaff;
  handleNextStep: () => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IMissionForStaff) => void;
  loading?: boolean;
  editDataOption?: boolean;
  onReset?: () => void;
  handlePreviousStep: () => void;
}
export type { IMissionForStaffForm };
