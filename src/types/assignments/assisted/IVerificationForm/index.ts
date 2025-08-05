import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";
import { IFormsUpdateData } from "@ptypes/assignments/IUpdateData";

interface IVerificationForm {
  requestSteps: IRequestSteps[];
  showModal: boolean;
  showRequestProcessModal: boolean;
  updatedData: IFormsUpdateData;
  saveAssignments: ISaveDataResponse;
  showPendingReqModal: boolean;
  loading: boolean;
  absentOfficialSelected: string;
  handleStepChange: (stepId: number) => void;
  onFinishForm: () => void;
  onPreviousStep: () => void;
  onToggleModal: () => void;
  onCloseRequestStatus: () => void;
  onClosePendingReqModal: () => void;
  onCloseProcess: () => void;
}

export type { IVerificationForm };
