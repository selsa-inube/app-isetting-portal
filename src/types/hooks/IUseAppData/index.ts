import { IUser } from "@ptypes/authAndPortalDataProvider/IUser";

interface IUseAppData {
  portalCode: string | null;
  user: IUser;
  code?: string;
  businessUnit?: string
}

export type { IUseAppData };
