import { IRequestDeleteMissions } from "@ptypes/missions/assisted/IRequestMissions/IDeleteDataMission";

const mapDeleteMissionToApi = (data: IRequestDeleteMissions) => {
  return {
    missionId: data.configurationRequestData?.missionId,
    missionName: data.configurationRequestData?.missionName,
    removalJustification: data.configurationRequestData?.justification,
    settingRequest: data.settingRequest
      ? {
          requestNumber: data.settingRequest.requestNumber,
          settingRequestId: data.settingRequest.settingRequestId,
        }
      : undefined,
  };
};

export { mapDeleteMissionToApi };
