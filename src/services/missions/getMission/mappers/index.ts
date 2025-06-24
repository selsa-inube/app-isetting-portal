import { IMisionData } from "@ptypes/missions/IMisionData";

const mapMissionsToEntities = (rolesData: IMisionData[]): IMisionData[] => {
  return rolesData.map((role) => ({
    id: String(role.missionId),
    missionId: String(role.missionId),
    missionName: String(role.missionName),
    descriptionUse: String(role.descriptionUse),
    businessManagerCode: String(role.businessManagerCode),
    businessManagerName: String(role.businessManagerName),
    MissionByRole: Object(role.MissionByRole),
  }));
};

export { mapMissionsToEntities };
