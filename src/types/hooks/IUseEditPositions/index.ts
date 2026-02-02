import { IAppData } from "@ptypes/authAndDataProvider/IAppData";
import { IRoleForStaff } from "@ptypes/rolesForStaff";

interface IUseEditPositions {
  data: {
    positionId: string;
    positionName: string;
    descriptionUse: string;
    positionsByRole: IRoleForStaff[];
  };
  appData: IAppData;
  rolesData: IRoleForStaff[] | undefined;
}
export type { IUseEditPositions };
