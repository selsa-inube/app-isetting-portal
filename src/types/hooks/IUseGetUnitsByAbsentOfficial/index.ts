import { IUsers } from "@ptypes/users/usersTable/IUsers";

interface IUseGetUnitsByAbsentOfficial {
  absentOfficial: string;
  unitsByAbsentOfficial: IUsers[];
}

export type { IUseGetUnitsByAbsentOfficial };
