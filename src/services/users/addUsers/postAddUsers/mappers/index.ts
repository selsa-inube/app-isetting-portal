import { enviroment } from "@config/environment";
import { IRequestUsers } from "@ptypes/users/tabs/userTab/addUser/IRequestUsers";

const mapAddUsersToApi = (data: IRequestUsers, businessManagerCode: string) => {
  const configurationRequestData = data.configurationRequestData;
  return {
    biologicalSex: configurationRequestData.biologicalSex,
    birthDay: configurationRequestData.birthDay,
    businessManagerCode,
    identificationNumber: configurationRequestData.identificationNumber,
    identificationType: configurationRequestData.identificationType,
    staffName: configurationRequestData.staffName,
    staffLastName: configurationRequestData.staffLastName,
    staffId: configurationRequestData?.staffId,
    missionData: {
      missionName: configurationRequestData.missionData.missionName,
    },
    missionName: configurationRequestData.missionData.missionName,
    modifyJustification: data.configurationRequestData?.modifyJustification,
    principalEmail: configurationRequestData.principalEmail,
    principalPhone: configurationRequestData.principalPhone,

    settingRequest: data.settingRequest
      ? {
          requestNumber: data.settingRequest.requestNumber,
          settingRequestId: data.settingRequest.settingRequestId,
        }
      : undefined,

    staffByBusinessUnitAndRole:
      configurationRequestData.staffByBusinessUnitAndRole.map((item) => ({
        businessUnitCode: item.businessUnitCode,
        positionName: item.positionName,
        roleName: item.roleName,
      })),
    registrationRedirectUrl: enviroment.REGISTRATION_REDIRECT_URL,
  };
};

export { mapAddUsersToApi };
