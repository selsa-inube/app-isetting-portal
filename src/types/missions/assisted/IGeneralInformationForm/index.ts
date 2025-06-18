import { IGeneralInformationEntry } from "@ptypes/missions/assisted/IGeneralInformationEntry";

interface IGeneralInformationForm {
  initialValues: IGeneralInformationEntry;
  loading?: boolean;
  onButtonClick: () => void;
  onPrevious: () => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IGeneralInformationEntry) => void;
  editDataOption?: boolean;
}

export type { IGeneralInformationForm };
