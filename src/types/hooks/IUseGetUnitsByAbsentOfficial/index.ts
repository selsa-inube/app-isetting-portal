import { IUsers } from "@ptypes/users/tabs/userTab/usersTable/IUsers";

interface IUseGetUnitsByAbsentOfficial {
  absentOfficial: string;
  unitsByAbsentOfficial: IUsers[];
}

export type { IUseGetUnitsByAbsentOfficial };
