import { IContactDataFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IContactData";
import { FormikProps } from "formik";

interface IUseContactDataForm {
  initialValues: IContactDataFormValues;
  ref: React.ForwardedRef<FormikProps<IContactDataFormValues>>;
  onSubmit?: (values: IContactDataFormValues) => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  loading?: boolean;
  editDataOption?: boolean;
  initialContactData?: IContactDataFormValues;
}
export type { IUseContactDataForm };
