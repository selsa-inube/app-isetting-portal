import { IUser } from "@ptypes/authAndPortalDataProvider/IUser";

interface IUseAppData {
  portalCode: string | null;
  code: string | undefined;
  user: IUser;
  businessUnit: string | undefined;
}

export type { IUseAppData };
