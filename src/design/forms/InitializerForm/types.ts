import { IFormEntry } from "@design/templates/assignmentForm/types";
import { IOptionInitialiceEntryApp } from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";
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

interface IIUseInitializerForm {
  dataOptionsForms: IAssignmentFormEntry[];
  setSelectedToggle: React.Dispatch<
    React.SetStateAction<IFormEntry[] | undefined>
  >;
  id?: string;
  keyData?: string;
  nameDB?: string;
  property?: string;
  propertyData?: string;
  readOnly?: boolean;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  dataOptionsValueSelect: IOptionInitialiceEntryApp[];
}

export type { IInitializerFormUI, IIUseInitializerForm };
