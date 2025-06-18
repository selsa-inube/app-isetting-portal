import { IGeneralInformationEntry } from "@ptypes/missions/assisted/IGeneralInformationEntry";
import { FormikProps } from "formik";

interface IUseGeneralInfo {
  initialValues: IGeneralInformationEntry;
  ref: React.ForwardedRef<FormikProps<IGeneralInformationEntry>>;
  onSubmit: ((values: IGeneralInformationEntry) => void) | undefined;
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  editDataOption?: boolean;
}

export type { IUseGeneralInfo };
