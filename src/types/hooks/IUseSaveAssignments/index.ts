import { IUseCase } from "@ptypes/IUseCase";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";

interface IUseSaveAssignments {
  useCase: IUseCase;
  businessUnits: string;
  userAccount: string;
  sendData: boolean;
  data: ISaveDataRequest;
  token: string;
  setSendData: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEntryDeleted?: (id: string | number) => void;
}

export type { IUseSaveAssignments };
