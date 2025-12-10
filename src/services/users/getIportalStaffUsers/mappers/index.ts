import { IUsers } from "@ptypes/users/tabs/userTab/usersTable/IUsers";

const mapUsersPortalStaffEntities = (usersData: IUsers[]): IUsers[] => {
  return usersData.map((user) => ({
    id: String(user.staffId),
    staffId: String(user.staffId),
    staffName: String(user.staffName),
    staffLastName: String(user.staffLastName),
    biologicalSex: String(user.biologicalSex),
    identificationTypeNaturalPerson: String(
      user.identificationTypeNaturalPerson
    ),
    identificationDocumentNumber: String(user.identificationDocumentNumber),
    birthDay: String(user.birthDay),
    principalEmail: String(user.principalEmail),
    principalPhone: String(user.principalPhone),
    businessManagerCode: String(user.businessManagerCode),
    businessManagerName: String(user.businessManagerName),
    missionName: String(user.missionName),
    userAccount: String(user.userAccount),
    staffByBusinessUnitAndRole: Object(user.staffByBusinessUnitAndRole),
  }));
};

export { mapUsersPortalStaffEntities };
