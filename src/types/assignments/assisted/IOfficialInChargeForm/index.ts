import { IOfficialInChargeEntry } from "../IOfficialInChargeEntry";

interface IOfficialInChargeForm {
  absentOfficialSelected: string;
  initialValues: IOfficialInChargeEntry;
  onButtonClick: () => void;
  loading?: boolean;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onPreviousStep?: () => void;
  onSubmit?: (values: IOfficialInChargeEntry) => void;
  editDataOption?: boolean;
  initialOfficialData?: IOfficialInChargeEntry;
}

export type { IOfficialInChargeForm };
