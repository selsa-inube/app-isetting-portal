import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "@ptypes/users/assisted/IGeneralInformationEntry";

interface IGeneralInformationFormUI {
  formik: FormikProps<IGeneralInformationEntry>;
  handleChange: (name: string, value: string) => void;
  onNextStep: () => void;
  isMobile: boolean;
  loading?: boolean;
}

export type { IGeneralInformationFormUI };
