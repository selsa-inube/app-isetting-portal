import { IAssistedSize, IAssistedStep } from "@inubekit/inubekit";
import { IFormsAddUserGeneralFormRefs } from "../forms/IGeneralFormValues/ref";
import { IGeneralUserFormValues } from "../forms/IGeneralFormValues";

interface IAddUserUI {
  showGoBackModal: boolean;
  smallScreen: boolean;
  title: string;
  description?: string;
  handleModal: () => void;
  steps: IAssistedStep[];
  currentStep: number;
  isCurrentFormValid: boolean;
  onNextStep: () => void;
  onPreviousStep: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  formReferences: IFormsAddUserGeneralFormRefs;
  initialValues: IGeneralUserFormValues;
  onGoBack: () => void;
  assistedLength: IAssistedSize;
  onToggleModal: () => void;
}
export type { IAddUserUI };
