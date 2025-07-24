import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";

interface IUseSavePositions {
  bussinesUnits: string;
  userAccount: string;
  sendData: boolean;
  data: ISaveDataRequest;
  setSendData: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPendingReq?: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export type { IUseSavePositions };
