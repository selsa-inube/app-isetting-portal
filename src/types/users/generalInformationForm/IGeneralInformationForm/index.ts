import { IGeneralInformationEntry } from "@ptypes/users/assisted/IGeneralInformationEntry";

interface IGeneralInformationForm {
  initialValues: IGeneralInformationEntry;
  loading?: boolean;
  handleNextStep: () => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IGeneralInformationEntry) => void;
  editDataOption?: boolean;
}

export type { IGeneralInformationForm };
