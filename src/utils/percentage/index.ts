import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";
import { countVerifiedRequests } from "../countVerifiedRequests";

const percentage = (value: IRequestSteps[]) => {
  return `${countVerifiedRequests(value).toFixed()}%`;
};

export { percentage };
