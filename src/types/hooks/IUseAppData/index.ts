import { IUser } from "@ptypes/authAndPortalDataProvider/IUser";

interface IUseAppData {
  user?: IUser;
  code?: string;
  businessUnit?: string;
}

export type { IUseAppData };
