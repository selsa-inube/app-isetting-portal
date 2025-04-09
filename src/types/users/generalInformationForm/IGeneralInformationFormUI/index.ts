import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "@ptypes/users/assisted/IGeneralInformationEntry";

interface IGeneralInformationFormUI {
  formik: FormikProps<IGeneralInformationEntry>;
  onNextStep: () => void;
  isMobile: boolean;
  loading?: boolean;
}

export type { IGeneralInformationFormUI };
