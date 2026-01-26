import { IEntry } from "@ptypes/table/IEntry";

interface IUseCancelRequestInProgress {
  businessUnit: string;
  data: IEntry;
  userAccount: string;
  setEntryCanceled: (id: string | number) => void;
  token: string;
}

export type { IUseCancelRequestInProgress };
