import { IBackendErrorDetail } from "../IBackDetails";

interface IBackendErrorResponse {
  code: string;
  message: string;
  description: string;
  i18nAttribute: string;
  errors?: IBackendErrorDetail[];
  config?: { method: string };
}
export type { IBackendErrorResponse };
