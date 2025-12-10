import { IUseCase } from "@ptypes/IUseCase";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";

interface IUseRequest {
  setSendData: React.Dispatch<React.SetStateAction<boolean>>;
  useCase:IUseCase;
  statusRequest: string;
  saveData: ISaveDataResponse;
  errorFetchRequest?: boolean;
}

export type { IUseRequest };
