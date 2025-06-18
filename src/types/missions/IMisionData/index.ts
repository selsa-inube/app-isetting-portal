import { IMissionByRole } from "../IMissionByRole";

interface IMisionData {
  missionId: string;
  missionName: string;
  descriptionUse: string;
  businessManagerCode: string;
  businessManagerName: string;
  MissionByRole: IMissionByRole[];
  id?: string | number; 
 
}

export type { IMisionData }; 