import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";

interface IUseRequest {
  setSendData: React.Dispatch<React.SetStateAction<boolean>>;
  useCase: "add" | "edit" | "delete";
  statusRequest: string;
  saveAssignments: ISaveDataResponse;
}

export type { IUseRequest };
