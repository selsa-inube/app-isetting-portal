
import { IRequestsInProgress } from "@ptypes/requestsInProgress/IRequestsInProgress";
import { mapRequestsInProgressToEntity } from "../mapRequestsToEntity";

const mapRequestsInProgressToEntities = (
  enums: IRequestsInProgress[],
): IRequestsInProgress[] => {
  return enums.map(mapRequestsInProgressToEntity);
};

export { mapRequestsInProgressToEntities };
