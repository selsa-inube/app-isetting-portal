import { IAssistedStep } from "@inubekit/inubekit";
import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "../IGeneralInformationEntry";

interface IAddUsersInvitationUI {
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
}

export type { IAddUsersInvitationUI };
