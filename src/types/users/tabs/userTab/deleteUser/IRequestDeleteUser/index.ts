import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { ISaveDeleteUser } from "../ISaveDeleteUser";

interface ISaveDeleteUsers {
  configurationRequestData: ISaveDeleteUser;
  removalJustification?: string;
  settingRequest?: ISaveDataResponse;
}

export type { ISaveDeleteUsers };
