import { FormikProps } from "formik";

import { IGeneralInfoForm } from "../../IGeneralInfoForm/indexs";

interface IGeneralInformationFormUI {
  formik: FormikProps<IGeneralInfoForm>;
  onNextStep: () => void;
  loading?: boolean;
  mobilePadding: string;
  labelButtonNext: string;
  buttonDisabledState: boolean;
}
export type { IGeneralInformationFormUI };
