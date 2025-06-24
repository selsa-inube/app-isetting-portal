import { IAppData } from "@ptypes/authAndDataProvider/IAppData";

interface IUseEditMission {
  data: {
    missionId: string;
    missionName: string;
    descriptionUse: string;
  };
  appData: IAppData;
}

export type { IUseEditMission };
