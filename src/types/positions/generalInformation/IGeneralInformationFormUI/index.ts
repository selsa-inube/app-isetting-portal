import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "@ptypes/positions/assisted/IGeneralInformationEntry";

interface IGeneralInformationFormUI {
  formik: FormikProps<IGeneralInformationEntry>;
  editDataOption: boolean;
  buttonDisabledState: boolean;
  labelButtonNext: string;
  valuesEqual: boolean;
  onReset: () => void;
  onButtonClick: () => void;
  onNextStep: () => void;
  loading?: boolean;
  isMobile: boolean;
}

export type { IGeneralInformationFormUI };
