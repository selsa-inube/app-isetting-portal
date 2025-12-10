import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal.types";
import { IBusinessManagers } from "@ptypes/staffPortal/IBusinessManagers";

interface IUseAuthRedirect {
  portalPublicCode: IStaffPortalByBusinessManager;
  businessManagersData: IBusinessManagers;
  portalCode: string | null;
}

export type { IUseAuthRedirect };
