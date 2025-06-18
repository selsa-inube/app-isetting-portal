import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";

interface IUseVerification {
  showRequestProcessModal: boolean;
  saveMission: ISaveDataResponse;
  showPendingReqModal: boolean;
}

export type { IUseVerification };
