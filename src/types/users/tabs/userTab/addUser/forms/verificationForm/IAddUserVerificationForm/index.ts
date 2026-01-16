import { ISaveDataResponse } from "@src/types/saveData/ISaveDataResponse";
import { IAddUserVerificationData } from "../IAddUserVerificationData";
import { IRequestSteps } from "@src/types/requestsInProgress/IRequestSteps";

interface IAddUserVerificationForm {
  updatedData: IAddUserVerificationData;
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
