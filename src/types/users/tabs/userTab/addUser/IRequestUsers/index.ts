import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { IAddUserVerificationData } from "../forms/verificationForm/IAddUserVerificationData";

interface IRequestUsers {
  configurationRequestData: IAddUserVerificationData;
  removalJustification?: string;
  settingRequest?: ISaveDataResponse;
}

export type { IRequestUsers };
