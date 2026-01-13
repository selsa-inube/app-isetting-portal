import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
interface IUseVerificationForm {
  showRequestProcessModal: boolean;
  saveUsers: ISaveDataResponse;
  showPendingReqModal: boolean;
}

export type { IUseVerificationForm };
