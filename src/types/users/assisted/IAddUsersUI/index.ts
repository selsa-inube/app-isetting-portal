import { FormikProps } from "formik";
import { IAssistedStep } from "@inubekit/inubekit";
import { IGeneralInformationEntry } from "../IGeneralInformationEntry";

interface IAddUsersUI {
  smallScreen: boolean;
  steps: IAssistedStep[];
  currentStep: number;
  onPreviousStep: () => void;
  onNextStep: () => void;
  onToggleModal: () => void;
  disabled: boolean;
  generalInformationRef: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  initialGeneralInformationValues: IGeneralInformationEntry;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
}

export type { IAddUsersUI };
