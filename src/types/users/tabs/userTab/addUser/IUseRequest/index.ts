import { IUseCase } from "@ptypes/IUseCase";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { IErrors } from "@ptypes/hooks/IErrors";

interface IUseUserRequest {
  setSendData: React.Dispatch<React.SetStateAction<boolean>>;
  useCase: IUseCase;
  statusRequest: string;
  saveUsers: ISaveDataResponse;
  errorFetchRequest: boolean;
  networkError: IErrors;
  setHasError: (value: React.SetStateAction<boolean>) => void;
}

export type { IUseUserRequest };
