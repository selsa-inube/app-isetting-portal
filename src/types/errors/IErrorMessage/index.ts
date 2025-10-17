import { IBackendErrorResponse } from "./IBackErrorResponse";

interface IErrorMessage {
  code: number;
  description: string;
  status: number | null;
  response: IBackendErrorResponse | null;
  method: string;
}

export type { IErrorMessage };
