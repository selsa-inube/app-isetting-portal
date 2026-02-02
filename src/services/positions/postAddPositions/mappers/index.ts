import { IRequestPositions } from "@ptypes/positions/assisted/IRequestPositions";

const mapAddPositionToApi = (data: IRequestPositions) => {
  return {
    businessManagerCode: data.configurationRequestData.businessManagerCode,
    businessUnitCode: data.configurationRequestData.businessUnitCode,
    positionId: data.configurationRequestData.positionId,
    positionName: data.configurationRequestData?.positionName,
    descriptionUse: data.configurationRequestData?.descriptionUse,
    modifyJustification: data.configurationRequestData?.modifyJustification,
    positionsByRole: data.configurationRequestData.positionsByRole?.map(
      (position) => ({
        roleName: position.roleName,
        transactionOperation: position.transactionOperation,
      }),
    ),

    settingRequest: data.settingRequest
      ? {
          requestNumber: data.settingRequest.requestNumber,
          settingRequestId: data.settingRequest.settingRequestId,
        }
      : undefined,
  };
};

export { mapAddPositionToApi };
