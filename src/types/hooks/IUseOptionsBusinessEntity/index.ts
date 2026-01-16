import { IGeneralUserFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IGeneralFormValues";
import { IFormEntry } from "@src/types/assignments/assignmentForm/IFormEntry";

interface IUseOptionsBusinessEntity {
  formValues: IGeneralUserFormValues;
  setFormValues: React.Dispatch<React.SetStateAction<IGeneralUserFormValues>>;
  activeEntries?: IFormEntry[];
}
export type { IUseOptionsBusinessEntity };
