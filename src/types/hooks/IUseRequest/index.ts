import { UseCase } from "@ptypes/IUseCase";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";

interface IUseRequest {
  setSendData: React.Dispatch<React.SetStateAction<boolean>>;
  useCase:UseCase;
  statusRequest: string;
  saveData: ISaveDataResponse;
  errorFetchRequest?: boolean;
}

export type { IUseRequest };
