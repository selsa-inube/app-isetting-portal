import { IGeneralInfoForm } from "../IGeneralInfoForm/indexs";

interface IGeneralInformationForm {
  initialValues: IGeneralInfoForm;
  handleNextStep: () => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IGeneralInfoForm) => void;
  loading?: boolean;
  editDataOption?: boolean;
  onReset?: () => void;
}
export type { IGeneralInformationForm };
