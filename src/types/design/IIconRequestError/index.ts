import { ISettingRequestError } from "@ptypes/requestsInProgress/ISettingRequestError";

interface IIconRequestError {
  status: string;
  settingRequestError?: ISettingRequestError[];
}

export type { IIconRequestError };
