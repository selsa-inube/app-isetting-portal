import { IRequestSteps } from "@ptypes/feedback/requestProcess/IRequestSteps";

const verifiedErrorRequest = (requests: IRequestSteps[]): boolean => {
  return requests.find((request) => request.status === "error") ? true : false;
};

export { verifiedErrorRequest };
