import { IGeneralInfoForm } from "@ptypes/users/tabs/userTab/addUser/forms/IGeneralInfoForm/indexs";
import { FormikProps } from "formik";

interface IUseAddUserGeneralInformationStep {
  initialValues: IGeneralInfoForm;
  ref: React.ForwardedRef<FormikProps<IGeneralInfoForm>>;
  onSubmit: ((values: IGeneralInfoForm) => void) | undefined;
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  editDataOption?: boolean;
  loading?: boolean;
}
export type { IUseAddUserGeneralInformationStep };
