import { IFilterTag } from "@isettingkit/business-rules";
import { IFormEntry } from "@ptypes/assignmentForm/IFormEntry";

interface IUseAssignmentForm {
  entries: IFormEntry[],
  setSelectedToggle: React.Dispatch<
    React.SetStateAction<IFormEntry[] | undefined>
  >,
  editDataOption: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  withFilter: boolean,
  appliedFilters?: IFilterTag[];
}


export type { IUseAssignmentForm };