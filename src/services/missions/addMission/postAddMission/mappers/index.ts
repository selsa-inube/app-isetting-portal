import { IRequestMissions } from "@ptypes/missions/assisted/IRequestMissions";

const mapAddMissionToApi = (
  data: IRequestMissions,
  businessManagerCode: string,
) => {
  return {
    businessManagerCode: businessManagerCode,
    businessManagerName: businessManagerCode,
    missionId: data.configurationRequestData?.missionId,
    descriptionnUse: data.configurationRequestData?.descriptionUse,
    missionName: data.configurationRequestData?.missionName,
    modifyJustification: data.configurationRequestData?.modifyJustification,
    settingRequest: data.settingRequest
      ? {
          requestNumber: data.settingRequest.requestNumber,
          settingRequestId: data.settingRequest.settingRequestId,
        }
      : undefined,
  };
};

export { mapAddMissionToApi };
