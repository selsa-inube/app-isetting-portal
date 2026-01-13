import { IRequestUsers } from "@src/types/users/tabs/userTab/addUser/IRequestUsers";

const mapAddUsersToApi = (data: IRequestUsers, businessManagerCode: string) => {
  const general = data.configurationRequestData.generalInformationStep;
  const mission = data.configurationRequestData.missionForStaffStep;
  const contact = data.configurationRequestData.contactDataStep;

  return {
    biologicalSex: general.gender,
    birthDay: String(general.birthDate),
    businessManagerCode,
    identificationNumber: general.idNumber,
    identificationType: general.idType,

    staffName: general.firstName,
    staffLastName: general.lastName,

    missionData: {
      descriptionUse: mission.missionDescription,
      missionName: mission.missionName,
    },
    missionName: mission.missionName,

    principalEmail: contact.email,
    principalPhone: contact.phone,

    settingRequest: data.settingRequest
      ? {
          requestNumber: data.settingRequest.requestNumber,
          settingRequestId: data.settingRequest.settingRequestId,
        }
      : undefined,
  };
};

export { mapAddUsersToApi };
