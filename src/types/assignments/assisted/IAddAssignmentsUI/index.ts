import { IAssistedStep } from "@inubekit/inubekit";
import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";
import { IAddAssignmentForms } from "../IAddAssignmentForms";
import { IAddAssignmentsRef } from "../IAddAssignmentsRef";
import { IRolesByUnitEntry } from "../IRolesByUnitEntry";
interface IAddAssignmentsUI {
  currentStep: number;
  formValid: boolean;
  smallScreen: boolean;
  steps: IAssistedStep[];
  absentOfficialSelected: string;
  formValues: IAddAssignmentForms;
  formReferences: IAddAssignmentsRef;
  setRolesSelected: React.Dispatch<React.SetStateAction<IRolesByUnitEntry[]>>;
  setIsCurrentFormValid:React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedToggle: React.Dispatch<React.SetStateAction<IBusinessEntry[]>>
  onNextStep: () => void;
  onPreviousStep: () => void;
  onToggleModal: () => void;
}

export type { IAddAssignmentsUI };
