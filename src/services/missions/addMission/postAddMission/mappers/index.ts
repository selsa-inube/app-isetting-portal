import { IRequestMissions } from "@src/types/missions/assisted/IRequestMissions";

const mapAddMissionToApi = (
  data: IRequestMissions,
  businessManagerCode: string
) => {
  console.log("Mapping data:", data, businessManagerCode);
  return {
    businessManagerCode: businessManagerCode,
    businessManagerName: businessManagerCode,
    descriptionUse: data.configurationRequestData.descriptionUse,
    missionName: data.configurationRequestData.missionName,
    settingRequest: data.settingRequest
      ? {
          requestNumber: data.settingRequest.requestNumber,
          settingRequestId: data.settingRequest.settingRequestId,
        }
      : undefined,
  };
};

export { mapAddMissionToApi };
