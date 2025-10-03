import { FormikProps } from "formik";

import { IGeneralInfoForm } from "../../IGeneralInfoForm/indexs";
import { IOption } from "@inubekit/inubekit";

interface IGeneralInformationFormUI {
  formik: FormikProps<IGeneralInfoForm>;
  onNextStep: () => void;
  loading?: boolean;
  mobilePadding: string;
  labelButtonNext: string;
  buttonDisabledState: boolean;
  optionGender: IOption[];
  optionIdType: IOption[];
  handleSelectChange: (name: string, value: string) => void;
}
export type { IGeneralInformationFormUI };
