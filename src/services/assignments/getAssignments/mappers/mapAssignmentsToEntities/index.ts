import { mapAssignmentsToEntity } from "../mapAssignmentsToEntity";
import { IAssignmentsData } from "@ptypes/assignments/IAssignmentsData";

const mapAssignmentsToEntities = (
  enums: IAssignmentsData[],
): IAssignmentsData[] => {
  return enums.map(mapAssignmentsToEntity);
};

export { mapAssignmentsToEntities };
