import { FormikProps } from "formik";
import { IOfficialInChargeEntry } from "../IOfficialInChargeEntry";

interface IUseOfficialInChargeForm {
  absentOfficialSelected: string;
  initialValues: IOfficialInChargeEntry;
  ref: React.ForwardedRef<FormikProps<IOfficialInChargeEntry>>;
  editDataOption: boolean;
  loading: boolean | undefined;
  onSubmit: ((values: IOfficialInChargeEntry) => void) | undefined;
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  initialOfficialData?: IOfficialInChargeEntry;
}

export type { IUseOfficialInChargeForm };
