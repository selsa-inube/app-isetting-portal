import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";
import { IFormAddPosition } from "@src/types/forms/verificationForm/IFormAddPosition";
import { ISaveDataResponse } from "@src/types/saveData/ISaveDataResponse";

interface IVerificationForm {
  requestSteps: IRequestSteps[];
  showModal: boolean;
  showRequestProcessModal: boolean;
  updatedData: IFormAddPosition;
  savePositions: ISaveDataResponse;
  showPendingReqModal: boolean;
  loading: boolean;
  isMobile: boolean;
  handleStepChange: (stepId: number) => void;
  onFinishForm: () => void;
  onPreviousStep: () => void;
  onToggleModal: () => void;
  onCloseRequestStatus: () => void;
  onClosePendingReqModal: () => void;
  onCloseProcess: () => void;
}

export type { IVerificationForm };
