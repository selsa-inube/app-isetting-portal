import { ISaveDataResponse } from "@src/types/saveData/ISaveDataResponse";

import { IRequestSteps } from "@src/types/requestsInProgress/IRequestSteps";
import { IAddUserVerificationStep } from "../IAddUserVerificationData/IVerificationStep";

interface IAddUserVerificationForm {
  updatedData: IAddUserVerificationStep;
  requestSteps: IRequestSteps[];
  saveUsers: ISaveDataResponse;
  showPendingReqModal: boolean;
  showRequestProcessModal: boolean;
  showModal: boolean;
  onCloseProcess: () => void;
  onClosePendingReqModal: () => void;
  onPreviousStep: () => void;
  onToggleModal: () => void;
  handleStepChange: (stepNumber: number) => void;
  onCloseRequestStatus: () => void;
  onSubmit: () => void;
}

export type { IAddUserVerificationForm };
