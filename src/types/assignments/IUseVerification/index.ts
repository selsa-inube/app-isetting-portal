import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";

interface IUseVerification {
  showRequestProcessModal: boolean;
  saveAssignments: ISaveDataResponse;
  showPendingRequestModal: boolean;
}

export type { IUseVerification };
