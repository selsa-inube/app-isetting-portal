import { IAssistedStep } from "@inubekit/inubekit";
import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";
import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { IAddAssignmentForms } from "../IAddAssignmentForms";
import { IAddAssignmentsRef } from "../IAddAssignmentsRef";
import { IRolesByUnitEntry } from "../IRolesByUnitEntry";
interface IAddAssignmentsUI {
  absentOfficialSelected: string;
  currentStep: number;
  formReferences: IAddAssignmentsRef;
  formValid: boolean;
  formValues: IAddAssignmentForms;
  loading: boolean;
  requestSteps: IRequestSteps[];
  showModal: boolean;
  saveAssignments: ISaveDataResponse;
  showPendingReqModal: boolean;
  showRequestProcessModal: boolean;
  smallScreen: boolean;
  steps: IAssistedStep[];
  onClosePendingReqModal: () => void;
  onCloseRequestStatus: () => void;
  onFinishForm: () => void;
  onNextStep: () => void;
  onPreviousStep: () => void;
  onToggleModal: () => void;
  setCurrentStep: (step: number) => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  setRolesSelected: React.Dispatch<React.SetStateAction<IRolesByUnitEntry[]>>;
  setSelectedToggle: React.Dispatch<React.SetStateAction<IBusinessEntry[]>>;
}

export type { IAddAssignmentsUI };
