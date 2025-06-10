import { ICancelReqInProcRequest } from "@ptypes/requestsInProgress/ICancelReqInProcRequest";

const mapCancelRequestInProgressToApi = (
  process: ICancelReqInProcRequest
): Record<string, string | number | object> => {
  return {
    removeSettingRequest: [
      {
        settingRequestId: process.settingRequestId,
        requestNumber: process.requestNumber,
        removalJustification: process.removalJustification,
      },
    ],
  };
};

export { mapCancelRequestInProgressToApi };
