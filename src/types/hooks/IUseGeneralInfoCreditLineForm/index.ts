import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "@ptypes/positions/assisted/IGeneralInformationEntry";

interface IUseGeneralInfoCreditLineForm {
  initialValues: IGeneralInformationEntry;
  ref: React.ForwardedRef<FormikProps<IGeneralInformationEntry>>;
  onSubmit: ((values: IGeneralInformationEntry) => void) | undefined;
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  editDataOption?: boolean;
}

export type { IUseGeneralInfoCreditLineForm };
