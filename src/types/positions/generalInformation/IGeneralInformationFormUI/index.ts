import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "@ptypes/positions/assisted/IGeneralInformationEntry";

interface IGeneralInformationFormUI {
  formik: FormikProps<IGeneralInformationEntry>;
  onNextStep: () => void;
  loading?: boolean;
  isMobile: boolean;
}

export type { IGeneralInformationFormUI };
