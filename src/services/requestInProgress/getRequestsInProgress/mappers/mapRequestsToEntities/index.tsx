import { IRequestsInProgress } from "@ptypes/requestsInProgress/IRequestsInProgress";
import { mapRequestsInProgressToEntity } from "../mapRequestsToEntity";

const mapRequestsInProgressToEntities = (
  data: IRequestsInProgress[],
): IRequestsInProgress[] => {
  return data.map(mapRequestsInProgressToEntity);
};

export { mapRequestsInProgressToEntities };
