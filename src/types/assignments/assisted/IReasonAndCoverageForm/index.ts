import { IReasonAndCoverageEntry } from "../IReasonAndCoverageEntry";

interface IReasonAndCoverageForm {
  initialValues: IReasonAndCoverageEntry;
  onButtonClick: () => void;
  loading?: boolean;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onPreviousStep?: () => void;
  onSubmit?: (values: IReasonAndCoverageEntry) => void;
  editDataOption?: boolean;
  initialData?: IReasonAndCoverageEntry;
}

export type { IReasonAndCoverageForm };
