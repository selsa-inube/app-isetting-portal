import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "@ptypes/missions/assisted/IGeneralInformationEntry";

interface IGeneralInformationFormUI {
  formik: FormikProps<IGeneralInformationEntry>;
  loading?: boolean;
  isMobile: boolean;
  labelButtonNext: string;
  isDisabledButton: boolean;
  labelButtonPrevious: string;
  onPreviousStep: () => void;
  onButtonClick: () => void;
  editDataOption?: boolean;
}

export type { IGeneralInformationFormUI };
