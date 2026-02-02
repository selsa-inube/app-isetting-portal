import { IGeneralUserFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IGeneralFormValues";
import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";

interface IUseOptionsBusinessEntity {
  formValues: IGeneralUserFormValues;
  setFormValues: React.Dispatch<React.SetStateAction<IGeneralUserFormValues>>;
  token: string;
  activeEntries?: IFormEntry[];
}
export type { IUseOptionsBusinessEntity };
