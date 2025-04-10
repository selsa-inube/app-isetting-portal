import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "@ptypes/users/assisted/IGeneralInformationEntry";
import { IServerDomain } from "@ptypes/IServerDomain";

interface IGeneralInformationFormUI {
  formik: FormikProps<IGeneralInformationEntry>;
  optionsUser: IServerDomain[];
  optionsIdentificationtypenatura: IServerDomain[];
  handleChange: (name: string, value: string) => void;
  onNextStep: () => void;
  isMobile: boolean;
  loading?: boolean;
  smallScreen?: boolean;
}

export type { IGeneralInformationFormUI };
