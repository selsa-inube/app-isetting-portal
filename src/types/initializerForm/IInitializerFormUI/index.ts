import { IFormEntry } from "@ptypes/assignmentForm/IFormEntry";
import { IOptionInitialiceEntryApp } from "@ptypes/positions/assisted/IOptionInitialiceEntryApp";
import { IAssignmentFormEntry, IMessageState } from "@ptypes/positions/forms";

interface IInitializerFormUI {
  dataOptionsForms: IAssignmentFormEntry[];
  dataOptionsValueSelect: IOptionInitialiceEntryApp[];
  isLoading: boolean;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangeInitializerForm: (
    dataOptionsForms: IAssignmentFormEntry[]
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
