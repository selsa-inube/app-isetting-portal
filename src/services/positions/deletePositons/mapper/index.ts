import { IRequestPositions } from "@src/types/positions/assisted/IRequestPositions";

const mapDeletePositionToApi = (data: IRequestPositions) => {
  return {
    positionId: data.configurationRequestData?.positionId,
    positionName: data.configurationRequestData?.positionName,
    removalJustification: data.configurationRequestData?.modifyJustification,
    settingRequest: data.settingRequest
      ? {
          requestNumber: data.settingRequest.requestNumber,
          settingRequestId: data.settingRequest.settingRequestId,
        }
      : undefined,
  };
};

export { mapDeletePositionToApi };
