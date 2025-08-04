import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";

interface IUseVerification {
  showRequestProcessModal: boolean;
  saveAssignments: ISaveDataResponse;
  showPendingReqModal: boolean;
}

export type { IUseVerification };
