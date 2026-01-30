import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IAssignmentFormEntry, IMessageState } from "@ptypes/positions/forms";

interface IInitializerFormUI {
  dataOptionsForms: IAssignmentFormEntry[];
  isLoading: boolean;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangeInitializerForm: (
    dataOptionsForms: IAssignmentFormEntry[],
  ) => void;
  withSubmitButtons?: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IAssignmentFormEntry[]) => boolean;
  setSelectedToggle: React.Dispatch<
    React.SetStateAction<IFormEntry[] | undefined>
  >;
  readOnly?: boolean;
  setChangedData?: (changeData: IAssignmentFormEntry[]) => void;
  changeData?: IAssignmentFormEntry[];
}

export type { IInitializerFormUI };
