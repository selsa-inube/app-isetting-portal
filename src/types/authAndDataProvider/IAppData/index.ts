import { IBusinessManager } from "../IBusinessManager";
import { IBusinessUnit } from "../IBusinessUnit";
import { IPortal } from "../IPortal";
import { IUser } from "../IUser";

interface IAppData {
  portal: IPortal;
  businessManager: IBusinessManager;
  businessUnit: IBusinessUnit;
  user: IUser;
  useCasesByStaff: string[];
  language: string;
  token: string;
}

export type { IAppData };
