import { IAuthConfig } from "@ptypes/IAuthConfig";
import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal.types";
import { IBusinessManagers } from "@ptypes/staffPortal/IBusinessManagers";

interface IUseAuthRedirect {
  portalPublicCode: IStaffPortalByBusinessManager;
  businessManagersData: IBusinessManagers;
  portalCode: string | null;
  authConfig: IAuthConfig | null;
  loadingPortalData: boolean;
  loadingBusinessManagers: boolean;
}

export type { IUseAuthRedirect };
