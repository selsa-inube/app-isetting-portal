import { IAssistedStep } from "@inubekit/inubekit";
import { IAddAssignmentForms } from "../IAddAssignmentForms";
import { IAddAssignmentsRef } from "../IAddAssignmentsRef";

interface IAddAssignmentsUI {
  currentStep: number;
  formValid: boolean;
  smallScreen: boolean;
  steps: IAssistedStep[];
  absentOfficialSelected: string;
  formValues: IAddAssignmentForms;
  formReferences: IAddAssignmentsRef;
  setIsCurrentFormValid:React.Dispatch<React.SetStateAction<boolean>>;
  onNextStep: () => void;
  onPreviousStep: () => void;
  onToggleModal: () => void;
}

export type { IAddAssignmentsUI };
