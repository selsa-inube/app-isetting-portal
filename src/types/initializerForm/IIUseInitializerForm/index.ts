import { IOptionInitialiceEntryApp } from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";
import { IFormEntry } from "@ptypes/assignmentForm/IFormEntry";
import { IAssignmentFormEntry } from "@ptypes/positions/forms";

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
