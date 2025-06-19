import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { mapBusinessUnitsPortalStaffApiToEntity } from "../mapBusUnitsPortalStaffEntity";

const mapBusUnitsPortalStaffEntities = (
  resend: IBusinessUnitsPortalStaff[]
): IBusinessUnitsPortalStaff[] => {
  return resend.map(mapBusinessUnitsPortalStaffApiToEntity);
};
export {
  mapBusUnitsPortalStaffEntities,
  mapBusinessUnitsPortalStaffApiToEntity,
};
