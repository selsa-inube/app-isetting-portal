import { IRequestSteps } from "@ptypes/feedback/requestProcess/IRequestSteps";

const UseVerifiedErrorRequest = (requests: IRequestSteps[]): boolean => {
  return requests.find((request) => request.status === "error") ? true : false;
};

export { UseVerifiedErrorRequest };
