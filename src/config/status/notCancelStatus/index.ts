import { ERequestStatus } from "@enum/requestStatus";

const notCancelStatus = [
  ERequestStatus.RequestCanceled,
  ERequestStatus.RequestProcessedWithError,
  ERequestStatus.RejectedRequest,
  ERequestStatus.RequestProcessed,
  ERequestStatus.ProcessingRequest,
];

export { notCancelStatus };
