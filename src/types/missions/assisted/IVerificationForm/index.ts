import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { IFormsUpdateData } from "../IUpdateData";
import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";

interface IVerificationForm {
  requestSteps: IRequestSteps[];
  showModal: boolean;
  showRequestProcessModal: boolean;
  updatedData: IFormsUpdateData;
  saveMission: ISaveDataResponse;
  showPendingReqModal: boolean;
  loading: boolean;
  handleStepChange: (stepId: number) => void;
  onFinishForm: () => void;
  onPreviousStep: () => void;
  onToggleModal: () => void;
  onCloseRequestStatus: () => void;
  onClosePendingReqModal: () => void;
  onCloseProcess: () => void;
}

export type { IVerificationForm };
