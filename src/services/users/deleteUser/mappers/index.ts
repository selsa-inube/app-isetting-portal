import { ISaveDeleteUsers } from "@ptypes/users/tabs/userTab/deleteUser/IRequestDeleteUser";

const mapDeleteUsersToApi = (data: ISaveDeleteUsers) => {
  return {
    staffName: data.configurationRequestData?.staffName,
    staffId: data.configurationRequestData?.staffId,
    removalJustification: data.configurationRequestData?.justification,
    settingRequest: data.settingRequest
      ? {
          requestNumber: data.settingRequest.requestNumber,
          settingRequestId: data.settingRequest.settingRequestId,
        }
      : undefined,
  };
};

export { mapDeleteUsersToApi };
