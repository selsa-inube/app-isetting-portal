import { IContactDataFormValues } from "../../IContactData";

interface IContactDataForm {
  initialValues: IContactDataFormValues;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  loading?: boolean;
  editDataOption?: boolean;
  initialContactData?: IContactDataFormValues;
}
export type { IContactDataForm };
