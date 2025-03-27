import { IUsers } from "@ptypes/users/usersTable";

const mapUsersPortalStaffEntities = (usersData: IUsers[]): IUsers[] => {
  return usersData.map((user) => ({
    staffId: String(user.staffId),
    staffName: String(user.staffName),
    biologicalSex: String(user.biologicalSex),
    identificationTypeNaturalPerson: String(
      user.identificationTypeNaturalPerson
    ),
    identificationNumber: String(user.identificationNumber),
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

const mapUserStaffApiToEntities = (users: IUsers[][]): IUsers[][] => {
  return users.map(mapUsersPortalStaffEntities);
};

export { mapUsersPortalStaffEntities, mapUserStaffApiToEntities };
