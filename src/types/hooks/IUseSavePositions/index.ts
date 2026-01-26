import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";

interface IUseSavePositions {
  businessUnits: string;
  businessManagerCode: string;
  userAccount: string;
  sendData: boolean;
  data: ISaveDataRequest;
  useCase: "add" | "edit" | "delete";
  token: string;

  setSendData: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorFetchSaveData?: React.Dispatch<React.SetStateAction<boolean>>;
  setEntryDeleted?: (id: string | number) => void;
}

export type { IUseSavePositions };
