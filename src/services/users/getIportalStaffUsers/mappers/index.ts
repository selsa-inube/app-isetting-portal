import { IUsers } from "@ptypes/users/tabs/userTab/usersTable/IUsers";

const mapUsersPortalStaffEntities = (usersData: IUsers[]): IUsers[] => {
  return usersData.map((user) => ({
    id: String(user.staffId),
    staffId: String(user.staffId),

    staffName: user.staffName ?? "",
    staffLastName: user.staffLastName ?? "",
    biologicalSex: user.biologicalSex ?? "",

    identificationTypeNaturalPerson: user.identificationTypeNaturalPerson ?? "",

    identificationDocumentNumber: user.identificationDocumentNumber ?? "",

    birthDay: user.birthDay ?? "",

    principalEmail: user.principalEmail ?? "",
    principalPhone: user.principalPhone ?? "",

    businessManagerCode: user.businessManagerCode ?? "",
    businessManagerName: user.businessManagerName ?? "",

    missionData: {
      missionName: user.missionData?.missionName ?? "",
      descriptionUse: user.missionData?.descriptionUse ?? "",
    },

    userAccount: user.userAccount ?? "",

    businessUnitsAsigned: user.businessUnitsAsigned ?? [],

    staffByBusinessUnitAndRole: user.staffByBusinessUnitAndRole ?? [],
  }));
};

export { mapUsersPortalStaffEntities };
