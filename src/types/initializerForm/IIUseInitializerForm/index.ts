import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IAssignmentFormEntry } from "@ptypes/positions/forms";
import { IOptionInitialiceEntryApp } from "@ptypes/forms/verificationForm/IOptionInitialiceEntryApp";

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

export type { IIUseInitializerForm };
